import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    // borderTopLeftRadius: 30,
    // borderBottomRightRadius: 30,
    borderRadius: 10,
  },
  textStyle: {
    color: colors.blue,
    fontWeight: "700",
    letterSpacing: 1,
    fontSize: 13,
    textTransform: "uppercase",
  },
});

export default styles;
