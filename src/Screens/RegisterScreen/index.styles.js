import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    flex: 2,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  heading: {
    color: colors.blue,
    ...typography.h1,
    letterSpacing: 5,
    fontWeight: "bold",
    padding: 20,
  },
  mainHeadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  customInputStyle: {
    marginTop: 10,
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
  errorMessage: {
    color: colors.error,
    letterSpacing: 2,
    fontSize: 12,
    textTransform: "uppercase",
    marginTop: 10,
  },
});

export default styles;
