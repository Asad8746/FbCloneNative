import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Form from "../Components/Form/Form";
import Input from "../Components/Input";
import CircleButton from "../Components/Form/CircleButton";
import Error from "../Components/Form/Error";

import useFormValidation from "../validation/useFormValidation";
import EmailValidator from "../validation/EmailValidator";
import { validator } from "../validation/passwordValidator";

import colors from "../theme/colors";
import typography from "../theme/typography";
import { authConstants } from "../Navigators/constants";

export const Signup = ({ navigation }) => {
  const f_name = useFormValidation("", validator, "First Name is required");
  const l_name = useFormValidation("", validator, "Last Name is Required");
  const about = useFormValidation("", validator, "About is Required");
  const email = useFormValidation("", EmailValidator);
  const password = useFormValidation("", validator, "Password is Required");
  return (
    <ScrollView contentContainerStyle={styles.containerStyle}>
      <Text style={styles.heading}>facebook</Text>
      <View style={styles.formContainer}>
        <Text style={{ ...styles.heading, color: colors.white }}>
          Register Yourself
        </Text>
        <Form>
          <Input
            placeholder="First Name"
            value={f_name.state}
            blur={f_name.blur}
            isValid={f_name.isValid}
            onBlur={() => f_name.setBlur(true)}
            onChange={(value) => f_name.setState(value)}
          />
          {!f_name.isValid ? <Error error={f_name.error} /> : null}

          <Input
            placeholder="Last Name"
            value={l_name.state}
            blur={l_name.blur}
            isValid={l_name.isValid}
            onBlur={() => l_name.setBlur(true)}
            onChange={(value) => l_name.setState(value)}
          />
          {!l_name.isValid ? <Error error={l_name.error} /> : null}
          <Input
            placeholder="What you do?"
            keyboardType="email-address"
            value={about.state}
            blur={about.blur}
            isValid={about.isValid}
            onBlur={() => about.setBlur(true)}
            onChange={(value) => about.setState(value)}
          />
          {!about.isValid ? <Error error={about.error} /> : null}

          <Input
            placeholder="Email"
            keyboardType="email-address"
            value={email.state}
            blur={email.blur}
            isValid={email.isValid}
            onBlur={() => email.setBlur(true)}
            onChange={(value) => email.setState(value)}
          />
          {!email.isValid ? <Error error={email.error} /> : null}
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={password.state}
            blur={password.blur}
            isValid={password.isValid}
            onBlur={() => password.setBlur(true)}
            onChange={(value) => password.setState(value)}
          />
          {!password.isValid ? <Error error={password.error} /> : null}

          <View style={styles.actions}>
            <Text style={styles.infoText}>Sign Up</Text>
            <CircleButton />
          </View>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => navigation.navigate(authConstants.login)}
            >
              <Text style={styles.link}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </Form>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 50,
  },
  heading: {
    color: colors.blue,
    ...typography.h1,
    flex: 1,
    letterSpacing: 5,
    fontWeight: "bold",
    padding: 20,
  },
  actions: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoText: {
    color: colors.white,
    ...typography.h2,
    letterSpacing: 3,
  },
  links: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    color: colors.white,
    letterSpacing: 3,
    paddingBottom: 5,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    ...typography.h5,
  },
});
