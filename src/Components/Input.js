import React from "react";
import PropsTypes from "prop-types";

import { View, TextInput, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";
import Error from "./Form/Error";
import AntDesign from "react-native-vector-icons/AntDesign";

const Input = ({
  isValid,
  placeholder,
  secureTextEntry,
  keyboardType,
  customContainerStyle,
  customInputStyle,
  onChange,
  blur,
  onBlur,
  value,
  error,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.inputContainer, ...customContainerStyle }}>
        <TextInput
          value={value}
          placeholder={placeholder}
          style={{ ...styles.input, ...customInputStyle }}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCorrect={false}
          onChangeText={onChange}
          autoCapitalize="none"
          placeholderTextColor={colors.white}
          onBlur={onBlur}
        />
        {blur ? (
          isValid ? (
            <AntDesign name="checkcircle" size={16} color={colors.success} />
          ) : (
            <AntDesign name="closecircle" size={16} color={colors.error} />
          )
        ) : null}
      </View>
      {!isValid && blur ? <Error error={error} /> : null}
    </View>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
  keyboardType: "default",
  customContainerStyle: {},
  customInputStyle: {},
};

Input.propTypes = {
  placeholder: PropsTypes.string.isRequired,
  secureTextEntry: PropsTypes.bool.isRequired,
  keyboardType: PropsTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    marginBottom: 5,
    paddingBottom: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: colors.white,
  },
  input: {
    // borderBottomColor: colors.white,
    // borderBottomWidth: 0.5,
    width: "95%",
    color: colors.white,
    paddingLeft: 0,
    letterSpacing: 2,
  },
});

export default Input;
