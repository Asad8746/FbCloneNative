import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from "../../theme/colors";

const Error = ({ error }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    width: "100%",
    // alignItems: 'center',
    paddingVertical: 3,
  },
  errorMessage: {
    color: colors.error,
    letterSpacing: 3,
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: "700",
  },
});

export default Error;
