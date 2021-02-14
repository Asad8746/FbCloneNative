import { StyleSheet } from "react-native";
import theme from "../../theme";
const { colors, typography } = theme;
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
  inputStyle: {
    marginTop: 30,
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
    justifyContent: "flex-end",
    paddingRight: 10,
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
  errorMessageContainer: {
    paddingVertical: 20,
    alignItems: "center",
    width: "100%",
  },
  errorMessage: {
    color: colors.error,
    letterSpacing: 2,
    fontSize: 12,
    textTransform: "uppercase",
  },
  buttonContainerStyle: {
    marginTop: 20,
  },
});

export default styles;
