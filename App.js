import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, HomeNavigator } from "./src/Navigators/index";
import DrawerNavigator from "./src/Navigators/DrawerNavigator";
import Loader from "./src/Components/Loader";
import { Context } from "./src/Context/Auth";
import Provider from "./src/Context/ContextProvider";
import { AppLoading } from "expo";

const App = () => {
  const { state, checkToken } = useContext(Context);
  useEffect(() => {
    checkToken();
  }, []);
  if (state.loading) {
    return <Loader />;
  }
  console.log(state);
  return (
    <>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        {state.isAuth ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
};

export default () => (
  <Provider>
    <App />
  </Provider>
);
