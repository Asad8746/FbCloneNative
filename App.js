import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, HomeNavigator } from "./src/Navigators/index";
import { Context } from "./src/Context/authContext";
import Provider from "./src/Context/ContextProvider";

const App = () => {
  const { state, checkToken } = useContext(Context);
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <>
      <StatusBar backgroundColor="white" />
      <NavigationContainer>
        {state.isAuth ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default () => (
  <Provider>
    <App />
  </Provider>
);
