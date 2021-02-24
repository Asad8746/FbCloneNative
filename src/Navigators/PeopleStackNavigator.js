import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { peopleConstants } from "./constants";
import { PeopleScreen } from "../Screens/";
import colors from "../theme/colors";
import { ProfileNavigator } from "./ProfileNavigator";

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
        component={PeopleScreen}
        options={{
          title: "People",
        }}
      />
      <Stack.Screen
        name={peopleConstants.profile}
        component={ProfileNavigator}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default PeopleStackNavigator;
