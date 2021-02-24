import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CreatePostScreen } from "../Screens";
import { userConstansts } from "./constants";
import { Context } from "../Context/Auth";
import colors from "../theme/colors";

import { ProfileNavigator } from "./ProfileNavigator";
const Stack = createStackNavigator();

export const UserNavigator = () => {
  const {
    state: { id },
  } = useContext(Context);
  return (
    <Stack.Navigator initialRouteName={userConstansts.profile}>
      <Stack.Screen
        name={userConstansts.profile}
        component={ProfileNavigator}
        initialParams={{ id }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={userConstansts.createPost}
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
