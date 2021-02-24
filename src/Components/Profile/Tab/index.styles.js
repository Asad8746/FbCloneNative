import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
export default StyleSheet.create({
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  countTextStyle: {
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  descriptionText: {
    fontSize: 10,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  textStyle: {
    color: colors.blue,
  },
  blurText: {
    color: "#A9A9A9",
  },
});
