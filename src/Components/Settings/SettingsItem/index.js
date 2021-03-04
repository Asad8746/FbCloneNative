import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./index.styles";
const index = ({ label, icon, onPress }) => {
  console.log(icon);
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      {icon()}
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;
