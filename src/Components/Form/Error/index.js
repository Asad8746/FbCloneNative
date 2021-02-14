import React from "react";
import { Text, View } from "react-native";
import styles from "./index.styles";
export const Error = ({ error }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorMessage}>{error}</Text>
    </View>
  );
};
