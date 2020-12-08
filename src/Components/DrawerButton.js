import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
const DrawerButton = (props) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Entypo name="menu" size={22} color="#8E8E8F" />
      </View>
    </TouchableOpacity>
  );
};

export default DrawerButton;
