import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;
console.log(WINDOW_HEIGHT);

export default StyleSheet.create({
  containerStyle: {
    width: "100%",
    height: WINDOW_HEIGHT >= 1000 ? 300 : 200,
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
    height: WINDOW_HEIGHT >= 1000 ? 150 : 100,
    width: WINDOW_HEIGHT >= 1000 ? 150 : 100,
    borderRadius: WINDOW_HEIGHT >= 1000 ? 150 : 100,
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
