import * as React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// components
import Entry from './components/Entry';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import MainNavigation from './components/Main/MainNavigation';
import Send from './components/Main/Send';



// navigation stack
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,}}>
          <Stack.Screen name="Entry" options={{ animationEnabled: false,}} component={Entry} />
          <Stack.Screen name="Login" options={{ animationEnabled: false,}}  component={Login} />
          <Stack.Screen name="Signup" options={{ animationEnabled: false,}}  component={Signup} />
          <Stack.Screen name="MainNavigation" options={{ animationEnabled: false,}} component={MainNavigation} />
          <Stack.Screen name="Send" options={{ animationEnabled: false,}} component={Send} />
        </Stack.Navigator>
      </NavigationContainer>
     </SafeAreaProvider>
  );
}