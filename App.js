import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

 const Stack = createNativeStackNavigator();
 const AuthStack = ({setIsSignedIn}) => {
   return (
<Stack.Navigator>
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {(props) => <LoginScreen {...props} setIsSignedIn={setIsSignedIn} />}
      </Stack.Screen>
      <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
    </Stack.Navigator>
   );
 }
 const AppStack = () => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);

   return (
     <Stack.Navigator>
       <Stack.Screen name="Home" options={{headerShown : false}} component={HomeScreen} />
     </Stack.Navigator>
   );
 }
export default function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  return (
    <NavigationContainer>
      {isSignedIn ? <AppStack /> : <AuthStack setIsSignedIn={setIsSignedIn} />}
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
