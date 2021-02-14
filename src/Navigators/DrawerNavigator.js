import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTab from "./BottomTabNavigator";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
