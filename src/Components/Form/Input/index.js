import React, { useRef } from "react";
import PropsTypes from "prop-types";

import { View, TextInput, Animated } from "react-native";
import colors from "../../../theme/colors";
import Error from "../Error";
import AntDesign from "react-native-vector-icons/AntDesign";
import styles from "./index.styles";
export const Input = ({
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
          }}
        >
          {placeholder}
        </Animated.Text>
        <TextInput
          placeholder=""
          value={value}
          onFocus={() => animateOnFocus()}
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
            <View style={styles.icon}>
              <AntDesign name="checkcircle" size={16} color={colors.success} />
            </View>
          ) : (
            <View style={styles.icon}>
              <AntDesign name="closecircle" size={16} color={colors.error} />
            </View>
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
