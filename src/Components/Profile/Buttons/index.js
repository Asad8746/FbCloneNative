import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./index.styles";
export const Buttons = ({ containerStyle }) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <TouchableOpacity style={[styles.buttonContainer, styles.followButton]}>
        <Text style={[styles.textStyle, styles.followText]}>Follow</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer, styles.blockButton]}>
        <Text style={[styles.textStyle, styles.followText]}>Block</Text>
      </TouchableOpacity>
    </View>
  );
};
