import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
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
    width: "100%",
    color: colors.white,
    letterSpacing: 2,
    alignSelf: "center",
  },
  textStyle: {
    width: "100%",
    color: colors.white,
    position: "absolute",
    left: 2,
  },
  icon: {
    position: "absolute",
    right: 0,
  },
});

export default styles;
