import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export default StyleSheet.create({
  containerStyle: {
    width: "100%",
    height: 200,
    position: "relative",
  },

  topContainerStyle: {
    height: "100%",
    width: "100%",
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
  },
  coverImageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  profileContainerStyle: {
    alignItems: "center",
    flex: 1,
  },
  profilePicContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  profilePicStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  nameTextStyle: {
    color: colors.white,
    fontSize: 18,
    letterSpacing: 1,
    padding: 5,
  },
});
