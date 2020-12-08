import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../Screens";
const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
