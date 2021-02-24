import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Animated from "react-native-reanimated";
import styles from "./index.styles";
const Tab = ({ value, label, onPress, onLongPress, isFocused }) => {
  return (
    <View style={[styles.textContainer]}>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        accessibilityState={isFocused ? { selected: true } : {}}
      >
        <Text
          style={[
            styles.countTextStyle,
            styles.textStyle,
            isFocused ? {} : styles.blurText,
          ]}
        >
          {value}
        </Text>
        <Animated.Text
          style={[
            styles.descriptionText,
            styles.textStyle,
            isFocused ? {} : styles.blurText,
          ]}
        >
          {label}
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

Tab.defaultProps = {
  value: 0,
  isFocused: false,
  label: "Tab",
  onPress: () => console.log("I am pressed"),
  onLongPress: () => console.log("I am Long pressed"),
  customfocusStyle: {},
};
Tab.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customfocusStyle: PropTypes.object,
  onLongPress: PropTypes.func.isRequired,
  isFocused: PropTypes.bool,
};

export default Tab;
