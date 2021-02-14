import React from "react";
import {
  TouchableWithoutFeedback,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import colors from "../../theme/colors";
import styles from "./index.styles";
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
