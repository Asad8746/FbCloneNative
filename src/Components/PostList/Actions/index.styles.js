import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export default StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    marginBottom: 10,
  },
  actionContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  infoText: {
    fontSize: 11,
    color: colors.blue,
  },
  actionText: {
    color: colors.blue,
    fontSize: 13,
    marginLeft: 10,
  },
});
