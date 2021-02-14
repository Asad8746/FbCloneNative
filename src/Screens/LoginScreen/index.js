import React, { useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button, FormContainer, Input } from "../../Components";

import { emailValidator, validator, useFormValidation } from "../../validation";
import { authConstants } from "../../Navigators/constants";
import { Context } from "../../Context/Auth";
import colors from "../../theme/colors";
import styles from "./index.styles";

export const Login = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const email = useFormValidation("", emailValidator);
  const password = useFormValidation("", validator, "Password is Required");
  const { Login } = useContext(Context);
  const onLoginButtonPress = () => {
    Login(
      { email: email.state, password: password.state },
      (errorMessage, loadingState) => {
        if (errorMessage) {
          setErrorMessage(errorMessage);
        }
        setLoading(loadingState);
      }
    );
  };
  const disabled = !email.isValid || !password.isValid;
  return (
    <ScrollView contentContainerStyle={styles.containerStyle}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.heading}>facebook</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={{ ...styles.heading, color: colors.white }}>
          Welcome Back
        </Text>
        <FormContainer>
          <Input
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
            value={email.state}
            onChange={(value) => email.setState(value)}
            blur={email.blur}
            isValid={email.isValid}
            onBlur={() => email.setBlur(true)}
            error={email.error}
          />
          <Input
            label="Password"
            placeholder="Password"
            secureTextEntry={true}
            value={password.state}
            customContainerStyle={styles.inputStyle}
            onChange={(value) => password.setState(value)}
            onBlur={() => password.setBlur(true)}
            isValid={password.isValid}
            blur={password.blur}
            error={password.error}
          />
          <Button
            label="Login"
            onPress={onLoginButtonPress}
            loading={loading}
            customContainerStyle={styles.buttonContainerStyle}
            disabled={disabled}
          />
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => navigation.navigate(authConstants.register)}
            >
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </FormContainer>
        {errorMessage ? (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}> Invalid Password or Email</Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};
