import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../theme/colors";
export const SafeAreaComponent = ({ children }) => {
  return <SafeAreaView style={styles.containerStyle}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
