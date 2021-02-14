import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";
import typography from "../theme/typography";
export const Empty = ({ message }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: colors.blue,
    ...typography.h3,
  },
});
export default Empty;
