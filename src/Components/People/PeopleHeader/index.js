import React from "react";
import { View, Text } from "react-native";
import styles from "./index.styles";
export const PeopleHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textStyle}>People</Text>
    </View>
  );
};
