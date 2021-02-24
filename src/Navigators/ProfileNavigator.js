import React from "react";
import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../Screens";
import FollowerNavigator from "./FollowNavigator";
import { profileConstants } from "./constants";

import HeaderRight from "../Components/Headers/HeaderRight";
const Stack = createStackNavigator();

export const ProfileNavigator = () => {
  const { params } = useRoute();
  const { id } = params;
  return (
    <Stack.Navigator initialRouteName={profileConstants.profile}>
      <Stack.Screen
        name={profileConstants.profile}
        component={ProfileScreen}
        initialParams={{ id }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          header: () => <HeaderRight />,
        }}
        name={profileConstants.followNavigator}
        component={FollowerNavigator}
      />
    </Stack.Navigator>
  );
};
