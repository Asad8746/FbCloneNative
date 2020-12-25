import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const HeaderLeft = () => {
  return (
    <View style={styles.container}>
      {/* <AntDesign name="arrow" color="black" size={22} /> */}
      <MaterialIcons name="arrow-back-ios" size={22} color={"white"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    left: 0,
    width: "100%",
    backgroundColor: "red",
    height: 50,
    // backgroundColor: "red",
    alignItems: "flex-start",
  },
});
export default HeaderLeft;
