import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const GroupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>People Screen</Text>
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
