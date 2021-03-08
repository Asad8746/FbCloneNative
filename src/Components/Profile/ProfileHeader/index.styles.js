import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { Dimensions } from "react-native";

const WINDOW_HEIGHT = Dimensions.get("window").height;

const btnConfig = {
  size: WINDOW_HEIGHT > 840 ? 50 : 35,
};
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
  uploadButtonContainer: {
    overflow: "hidden",
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    right: 0,
  },
  coverButton: {
    justifyContent: "center",
    alignItems: "center",
    height: btnConfig.size,
    width: btnConfig.size,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "white",
  },
  coverTouchableContainer: {
    height: btnConfig.size,
    width: btnConfig.size,
    justifyContent: "center",
    alignItems: "center",
  },
  profileOverlayContainer: {
    width: "100%",
    height: "40%",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 999,
    bottom: 0,
  },
  profileActionContainer: {
    flex: 1,
    flexDirection: "row",
  },
  profileAction: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    height: "100%",
    width: 1,
    backgroundColor: colors.white,
  },
});
