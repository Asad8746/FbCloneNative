import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import colors from "../theme/colors";
const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.blue} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Loader;
