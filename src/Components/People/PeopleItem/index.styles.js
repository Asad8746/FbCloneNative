import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "90%",
    marginLeft: 10,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    elevation: 8,
    marginBottom: 10,
    position: "relative",
    backgroundColor: colors.white,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
  },
  imageContainer: {
    height: 115,
    width: 115,
    borderRadius: 115,
    overflow: "hidden",
    // marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // left: 0,
    // transform: [{ translateX: -30 }],
    borderColor: "black",
    borderWidth: 0.5,
  },
  rightContainer: {
    marginLeft: 20,
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },

  imageStyle: {
    height: 115,
    width: 115,
    borderRadius: 115,
  },
  nameText: {
    color: colors.blue,
    fontSize: 20,
  },
  actions: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  action: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 8,
    padding: 5,
  },
});

export default styles;
