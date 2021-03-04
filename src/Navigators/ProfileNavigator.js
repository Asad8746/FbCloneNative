import React, { useCallback, useContext } from "react";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../Screens";
import FollowerNavigator from "./FollowNavigator";
import { profileConstants } from "./constants";
import { Context as PostsContext } from "../Context/Posts";
import { Context as ProfileContext } from "../Context/Profile";

import HeaderRight from "../Components/Headers/HeaderRight";
const Stack = createStackNavigator();

export const ProfileNavigator = () => {
  const { params } = useRoute();
  const { resetPosts } = useContext(PostsContext);
  const { resetProfile } = useContext(ProfileContext);
  useFocusEffect(
    useCallback(() => {
      return () => {
        console.log("Unmounted");
      };
    })
  );
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
