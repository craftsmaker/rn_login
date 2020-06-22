import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Constants from 'expo-constants';
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import {RockStackParamList} from "./src/utils/types";

const Stack = createStackNavigator<RockStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}