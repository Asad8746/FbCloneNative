import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    marginTop: 20,
    width: "100%",
    backgroundColor: colors.white,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    // alignItems: "flex-start",
  },
  textStyle: {
    color: colors.blue,
    fontSize: 17,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default styles;
