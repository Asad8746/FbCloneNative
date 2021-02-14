import React, { useContext, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, HomeNavigator } from "./src/Navigators/index";
import DrawerNavigator from "./src/Navigators/DrawerNavigator";
import { Loader } from "./src/Components";
import { Context } from "./src/Context/Auth";
import Provider from "./src/Context/ContextProvider";
import { AppLoading } from "expo";
import colors from "./src/theme/colors";

const App = () => {
  const { state, checkToken } = useContext(Context);
  useEffect(() => {
    // console.log("Check Token");
    checkToken();
  }, []);
  if (state.loading) {
    return <Loader />;
  }
  return (
    <>
      <StatusBar backgroundColor={colors.white} />
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
