import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import useFormValidation from "../validation/useFormValidation";
import Form from "../Components/Form/Form";
import Input from "../Components/Input";
import Error from "../Components/Form/Error";
import EmailValidator from "../validation/EmailValidator";
import { authConstants } from "../Navigators/constants";
import { Context } from "../Context/authContext";
import { validator } from "../validation/passwordValidator";
import CircleButton from "../Components/Form/CircleButton";
import colors from "../theme/colors";
import typography from "../theme/typography";
// import { Context } from "../Context/AuthContext";

export const Login = ({ navigation }) => {
  const email = useFormValidation("", EmailValidator);
  const password = useFormValidation("", validator, "Password is Required");
  const { Login } = useContext(Context);

  return (
    <ScrollView contentContainerStyle={styles.containerStyle}>
      <Text style={styles.heading}>facebook</Text>
      <View style={styles.formContainer}>
        <Text style={{ ...styles.heading, color: colors.white }}>
          Welcome Back
        </Text>
        <Form>
          <Input
            label="Email"
            placeholder="Enter Your Email"
            keyboardType="email-address"
            value={email.state}
            onChange={(value) => email.setState(value)}
            blur={email.blur}
            isValid={email.isValid}
            onBlur={() => email.setBlur(true)}
          />
          {!email.isValid ? <Error error={email.error} /> : null}
          <Input
            label="Password"
            placeholder="Enter Your Password"
            secureTextEntry={true}
            value={password.state}
            onChange={(value) => password.setState(value)}
            onBlur={() => password.setBlur(true)}
            isValid={password.isValid}
            blur={password.blur}
          />
          {!password.isValid ? <Error error={password.error} /> : null}

          <View style={styles.actions}>
            <Text style={styles.infoText}>Sign in</Text>
            <CircleButton
              onPress={() => {
                Login({ email: email.state, password: password.state });
              }}
            />
          </View>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => navigation.navigate(authConstants.register)}
            >
              <Text style={styles.link}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.link}>Forget Password?</Text>
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
    height: "80%",
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 80,
  },
  heading: {
    color: colors.blue,
    ...typography.h1,
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
