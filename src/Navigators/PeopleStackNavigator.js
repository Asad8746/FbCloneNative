import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { peopleConstants } from "./constants";
import PeopleListScreen from "../Screens/PeopleScreen";
import { ProfileScreen } from "../Screens/";
import colors from "../theme/colors";
import HeaderLeft from "../Components/Headers/HeaderLeft";
const Stack = createStackNavigator();
const PeopleStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: colors.blue,
        headerTitleStyle: {
          fontSize: 18,
          textTransform: "uppercase",
          letterSpacing: 1,
        },
      }}
    >
      <Stack.Screen
        name={peopleConstants.peopleList}
        component={PeopleListScreen}
        options={{
          title: "People",
        }}
      />
      <Stack.Screen
        name={peopleConstants.profile}
        component={ProfileScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default PeopleStackNavigator;
