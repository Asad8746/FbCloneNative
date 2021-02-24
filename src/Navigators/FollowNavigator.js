import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ProfileTopTabNavigatorConstants } from "./constants";

import FollowerScreen from "../Screens/FollowerScreen";
import FollowingScreen from "../Screens/FollowingScreen";
import { Context } from "../Context/Profile";
import theme from "../theme";
const Tab = createMaterialTopTabNavigator();
const FollowNavigator = () => {
  const { state } = useContext(Context);
  const { followers, following } = state.profile;
  return (
    <>
      <StatusBar hidden />
      <Tab.Navigator
        initialRouteName={ProfileTopTabNavigatorConstants.followers}
        tabBarOptions={{
          labelStyle: {
            fontSize: 15,
            textTransform: "capitalize",
          },
          activeTintColor: theme.colors.blue,
          inactiveTintColor: theme.colors.grey,
          pressColor: theme.colors.blue,
        }}
      >
        <Tab.Screen
          options={{
            title: `${followers} ${" "} ${
              followers > 1 ? "followers" : "follower"
            }`,
          }}
          name={ProfileTopTabNavigatorConstants.followers}
          component={FollowerScreen}
        />
        <Tab.Screen
          options={{ title: `${following} ${" "} following` }}
          name={ProfileTopTabNavigatorConstants.following}
          component={FollowingScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default FollowNavigator;
