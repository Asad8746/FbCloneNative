import React from "react";
import { DrawerContent } from "../Components";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTabNavigator";
import SettingsNavigator from "./SettingsNavigator";
import { drawerConstants } from "./constants";
import { AntDesign } from "@expo/vector-icons";
import theme from "../theme";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={drawerConstants.home}
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: theme.colors.blue,
        labelStyle: {
          fontSize: 14,
          textTransform: "uppercase",
          fontWeight: "700",
          letterSpacing: 1,
        },
      }}
    >
      <Drawer.Screen
        name={drawerConstants.home}
        component={BottomTab}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ focused, size }) => {
            return (
              <AntDesign
                name="home"
                size={size}
                color={focused ? theme.colors.blue : theme.colors.grey}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name={drawerConstants.settings}
        component={SettingsNavigator}
        options={{
          unmountOnBlur: true,
          drawerLabel: "Settings",
          drawerIcon: ({ focused, size }) => {
            return (
              <AntDesign
                name="setting"
                size={size}
                color={focused ? theme.colors.blue : theme.colors.grey}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
