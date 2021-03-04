import React from "react";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import colors from "../../theme/colors";
import styles from "./index.styles";
import PropTypes from "prop-types";
export const Button = ({ label, onPress, loading, disabled }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator color={colors.blue} size={23} />
        ) : (
          <Text style={styles.textStyle}>{label}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

Button.defaultProps = {
  label: "",
  onPress: () => console.log("i am pressed"),
  loading: false,
  disabled: false,
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};
