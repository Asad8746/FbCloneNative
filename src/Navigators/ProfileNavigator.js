import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const Timeline = () => {
  return (
    <View>
      <Text>Timeline</Text>
    </View>
  );
};
const Followers = () => {
  return (
    <View>
      <Text>Followers</Text>
    </View>
  );
};
const Following = () => {
  return (
    <View>
      <Text>Following</Text>
    </View>
  );
};

export const ProfileNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Followers" component={Followers} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
};
