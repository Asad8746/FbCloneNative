import React, { useState, useContext } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import { Context } from "../../Context/Auth";

import { FormContainer, Input, Button } from "../../Components";

import {
  emailValidator,
  validator,
  useFormValidation,
} from "../../validation/";
import { authConstants } from "../../Navigators/constants";
import colors from "../../theme/colors";
import styles from "./index.styles";

export const Signup = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const f_name = useFormValidation("", validator, "First Name is required");
  const l_name = useFormValidation("", validator, "Last Name is Required");
  const about = useFormValidation("", validator, "About is Required");
  const email = useFormValidation("", emailValidator);
  const password = useFormValidation("", validator, "Password is Required");
  const { registerUser } = useContext(Context);
  const onSubmit = () => {
    registerUser(
      {
        f_name: f_name.state,
        l_name: l_name.state,
        about: about.state,
        email: email.state,
        password: password.state,
        gender: "Male",
      },
      (loadingStatus, Error) => {
        setLoading(loadingStatus);
        if (Error !== "") {
          setError(Error);
        }
      }
    );
  };
  const disabled =
    !f_name.isValid ||
    !l_name.isValid ||
    !email.isValid ||
    !password.isValid ||
    !about.isValid;
  return (
    <ScrollView contentContainerStyle={styles.containerStyle}>
      <View style={styles.mainHeadingContainer}>
        <Text style={[styles.heading]}>facebook</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={{ ...styles.heading, color: colors.white }}>
          Register Yourself
        </Text>
        <FormContainer customStyle={styles.formConFormContainerStyle}>
          <Input
            placeholder="First Name"
            value={f_name.state}
            blur={f_name.blur}
            isValid={f_name.isValid}
            onBlur={() => f_name.setBlur(true)}
            onChange={(value) => f_name.setState(value)}
            error={f_name.error}
            customContainerStyle={styles.customInputStyle}
          />

          <Input
            placeholder="Last Name"
            value={l_name.state}
            blur={l_name.blur}
            isValid={l_name.isValid}
            onBlur={() => l_name.setBlur(true)}
            onChange={(value) => l_name.setState(value)}
            error={l_name.error}
            customContainerStyle={styles.customInputStyle}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            value={email.state}
            blur={email.blur}
            isValid={email.isValid}
            onBlur={() => email.setBlur(true)}
            onChange={(value) => email.setState(value)}
            error={email.error}
            customContainerStyle={styles.customInputStyle}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={password.state}
            blur={password.blur}
            isValid={password.isValid}
            onBlur={() => password.setBlur(true)}
            onChange={(value) => password.setState(value)}
            error={password.error}
            customContainerStyle={styles.customInputStyle}
          />
          <Input
            placeholder="What you do?"
            keyboardType="email-address"
            value={about.state}
            blur={about.blur}
            isValid={about.isValid}
            onBlur={() => about.setBlur(true)}
            onChange={(value) => about.setState(value)}
            error={about.error}
            customContainerStyle={styles.customInputStyle}
          />

          {/* <View style={styles.actions}>
            <Text style={styles.infoText}>Sign Up</Text>
            <CircleButton onPress={onSubmit} />
          </View> */}
          <Button
            label="Sign Up"
            onPress={onSubmit}
            loading={loading}
            disabled={disabled}
            // customContainerStyle={styles.buttonContainerStyle}
          />
          {error ? (
            <View style={styles.errorMessageContainer}>
              <Text style={styles.errorMessage}>{error}</Text>
            </View>
          ) : null}
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => navigation.navigate(authConstants.login)}
            >
              <Text style={styles.link}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </FormContainer>
      </View>
    </ScrollView>
  );
};
