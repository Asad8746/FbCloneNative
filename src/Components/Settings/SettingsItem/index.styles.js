import { StyleSheet } from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 5,
    borderBottomColor: "rgba(59, 89, 152, 0.3)",
    borderBottomWidth: 0.5,
    alignItems: "center",
    paddingLeft: 20,
  },
  textStyle: {
    fontSize: 16,
    color: theme.colors.blue,
    marginLeft: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default styles;
