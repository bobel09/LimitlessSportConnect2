import * as React from "react";
import { Dimensions, StyleSheet, View, Text, Alert } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [pins, setPins] = React.useState([]);
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    // Get the user's current location and fetch basketball courts
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission denied");
        return;
      }

      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, distanceInterval: 10 },
        (currentLocation) => {
          console.log(currentLocation.coords);
          setLocation(currentLocation.coords);
          fetchBasketballCourts(currentLocation.coords.latitude, currentLocation.coords.longitude);
        }
      );
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchBasketballCourts = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&keyword=basketball%20court&key=AIzaSyDz_CZoKQw_x2zklOBk0MxMuaeseW_lSkc`
      );
      const data = await response.json();
      const basketballCourts = data.results.map((result) => ({
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
        name: result.name,
      }));
      setPins(basketballCourts);
    } catch (error) {
      console.error("Error fetching basketball courts:", error);
    }
  };

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          if (details) {
            // Fetch and display basketball courts using the selected location
            fetchBasketballCourts(details.geometry.location.lat, details.geometry.location.lng);
          }
        }}
        query={{
          key: "AIzaSyDz_CZoKQw_x2zklOBk0MxMuaeseW_lSkc",
          language: "en",
          types: "point_of_interest",
          radius: 5000, // Set the radius for search
        }}
        styles={{
          container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
          listView: { backgroundColor: "white" },
        }}
      />

      <MapView
        style={styles.map}
        provider="google"
        showsUserLocation={true}
        initialRegion={{
          latitude: location?.latitude || undefined,
          longitude: location?.longitude || undefined,
        }}
      >
        {/* Display basketball courts */}
        {pins.map((pin, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
          >
            <Callout>
              <Text>{pin.name}</Text>
            </Callout>
          </Marker>
        ))}

        {/* Circle with a radius of 5000 meters */}
        {location && (
          <Circle
            center={{ latitude: location.latitude, longitude: location.longitude }}
            radius={5000}
            fillColor="rgba(0, 0, 255, 0.1)" // Adjust the color and opacity as needed
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});