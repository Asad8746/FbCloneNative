import React from "react";
import { View } from "react-native";
import styles from "./index.styles";
export const FormContainer = ({ children, customStyle }) => {
  return <View style={[styles.form, customStyle]}>{children}</View>;
};

FormContainer.defaultProps = {
  customStyle: {},
};
