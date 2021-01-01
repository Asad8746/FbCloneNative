import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen, CreatePostScreen } from "../Screens";
import { profileConstants } from "./constants";
import { Context } from "../Context/Auth";
import colors from "../theme/colors";

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
  const {
    state: { id },
  } = useContext(Context);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={profileConstants.profile}
        component={ProfileScreen}
        initialParams={{ id }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={profileConstants.createPost}
        component={CreatePostScreen}
        options={{
          title: "Create Post",
          headerTitleAlign: "center",
          headerTintColor: colors.blue,
          headerTitleStyle: { fontSize: 16 },
        }}
      />
    </Stack.Navigator>
  );
};
