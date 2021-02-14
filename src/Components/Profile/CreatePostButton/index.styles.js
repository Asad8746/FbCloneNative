import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 999,
    backgroundColor: colors.blue,
    height: 45,
    width: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
