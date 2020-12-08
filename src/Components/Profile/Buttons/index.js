import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./index.styles";
const Buttons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.buttonContainer, styles.followButton]}>
        <Text style={[styles.textStyle, styles.followText]}>Follow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, styles.blockButton]}>
        <Text style={[styles.textStyle, styles.followText]}>Block</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
