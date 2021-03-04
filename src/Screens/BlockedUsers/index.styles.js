import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  itemStyle: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: theme.colors.blue,
    borderBottomWidth: 1,
  },
  itemImage: {
    height: 70,
    width: 70,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameStyle: {
    fontSize: 17,
    marginLeft: 20,
  },
  blockButton: {
    backgroundColor: theme.colors.error,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  blockButtonText: {
    color: theme.colors.white,
    textTransform: "uppercase",
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default styles;
