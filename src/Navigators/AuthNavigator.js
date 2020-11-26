import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup } from "../Screens/";
import { authConstants } from "./constants";

const Stack = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={authConstants.login} component={Login} />
      <Stack.Screen name={authConstants.register} component={Signup} />
    </Stack.Navigator>
  );
};
