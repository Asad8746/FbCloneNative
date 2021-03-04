import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PropTypes from "prop-types";
export const HeaderLeftIcon = ({ color, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name="long-arrow-left" size={22} color={color} />
    </TouchableOpacity>
  );
};

HeaderLeftIcon.defaultProps = {
  color: "",
  onPress: () => console.log("I am pressed"),
};
HeaderLeftIcon.propTypes = {
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
