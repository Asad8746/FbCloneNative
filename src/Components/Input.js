import React, { useRef } from "react";
import PropsTypes from "prop-types";

import { View, TextInput, StyleSheet, Animated } from "react-native";
import colors from "../theme/colors";
import { Error } from "./";
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
  const translateY = useRef(new Animated.Value(0)).current;
  const fontSize = useRef(new Animated.Value(14)).current;
  const animateOnFocus = () => {
    Animated.timing(translateY, {
      toValue: -30,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };
  const animateOnBlur = () => {
    Animated.timing(translateY, {
      toValue: 0,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.inputContainer, ...customContainerStyle }}>
        <Animated.Text
          style={{
            ...styles.textStyle,
            transform: [{ translateY }],
            // fontSize,
          }}
        >
          {placeholder}
        </Animated.Text>
        <TextInput
          value={value}
          onFocus={() => animateOnFocus()}
          // placeholder={placeholder}
          style={{ ...styles.input, ...customInputStyle }}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCorrect={false}
          onChangeText={onChange}
          autoCapitalize="none"
          onBlur={() => {
            if (value.length === 0) {
              animateOnBlur();
            }
            onBlur();
          }}
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
  textStyle: {
    color: colors.white,
    position: "absolute",
    left: 0,
  },
});

export default Input;
