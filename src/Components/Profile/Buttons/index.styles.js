import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    width: "70%",
    alignSelf: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonContainer: {
    width: "46%",
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 3,
  },
  textStyle: {
    letterSpacing: 1,
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  followButton: {
    backgroundColor: colors.blue,
  },
  followText: {
    color: colors.white,
  },
  blockButton: {
    backgroundColor: "tomato",
  },
});
