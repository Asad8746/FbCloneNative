import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeScreen from "../Screens/HomeScreen";
import PeopleStackNavigator from "./PeopleStackNavigator";
import GroupScreen from "../Screens/GroupScreen";
import colors from "../theme/colors";
import DrawerButton from "../Components/DrawerButton";
import { ProfileNavigator } from "./ProfileNavigator";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.blue,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="drawer"
        component={DrawerButton}
        options={{
          tabBarButton: (props) => {
            return (
              <DrawerButton
                {...props}
                onPress={() => navigation.toggleDrawer()}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user-circle" size={size} color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="People"
        component={PeopleStackNavigator}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Groups"
        component={GroupScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
