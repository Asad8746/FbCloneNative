import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { settingsConstants } from "./constants";
import { SettingsScreen, BlockedUsersScreen } from "../Screens";

import { HeaderLeftIcon } from "../Components";
import theme from "../theme";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();
const SettingsNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => (
          <HeaderLeftIcon
            color={theme.colors.white}
            onPress={() => navigation.goBack()}
          />
        ),
        headerStyle: {
          backgroundColor: theme.colors.blue,
        },
        headerTintColor: theme.colors.white,
        gestureDirection: "horizontal",
        headerTitleStyle: {
          fontSize: 17,
          textTransform: "uppercase",
          letterSpacing: 1,
        },
      }}
      initialRouteName={settingsConstants.settings}
    >
      <Stack.Screen
        name={settingsConstants.settings}
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name={settingsConstants.block}
        component={BlockedUsersScreen}
        options={{
          title: "Blocked Users",
          headerLeft: () => (
            <HeaderLeftIcon
              color={theme.colors.white}
              onPress={() => navigation.navigate(settingsConstants.settings)}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
