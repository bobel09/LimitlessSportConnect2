import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

 const Stack = createNativeStackNavigator();
 const AuthStack = () => {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Signup" component={SignupScreen} />
     </Stack.Navigator>
   );
 }
 const AppStack = () => {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Home" options={{headerShown : false}} component={HomeScreen} />
     </Stack.Navigator>
   );
 }
export default function App() {
  const isSignedIn = false;
  return (
    <NavigationContainer>
      {isSignedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
