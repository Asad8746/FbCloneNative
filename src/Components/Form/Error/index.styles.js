import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  errorContainer: {
    width: "100%",
    paddingVertical: 3,
  },
  errorMessage: {
    color: colors.error,
    letterSpacing: 3,
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: "700",
  },
});

export default styles;
