import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import TimeLine from "../Components/Profile/TimeLine";

const Tab = createMaterialTopTabNavigator();

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
      <Tab.Screen name="Timeline" component={TimeLine} />
      <Tab.Screen name="Followers" component={Followers} />
      <Tab.Screen name="Following" component={Following} />
    </Tab.Navigator>
  );
};
