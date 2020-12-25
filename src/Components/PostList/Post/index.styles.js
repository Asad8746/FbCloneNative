import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    // elevation: 8,
    // padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.blue,
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.8)",
    resizeMode: "cover",
  },
  imageStyle: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  nameTextStyle: {
    marginLeft: 15,
    color: colors.blue,
    fontSize: 15,
    fontWeight: "600",
  },
  descriptionStyle: {
    fontSize: 13,
    color: "grey",
    letterSpacing: 1,
    marginBottom: 10,
  },
});
