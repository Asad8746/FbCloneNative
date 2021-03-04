import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  topContainerStyle: {
    height: 200,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  profileContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 200,
    overflow: "hidden",
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 200,
  },
  nameStyle: {
    fontSize: 20,
    color: theme.colors.white,
    marginTop: 10,
  },
});
export default styles;
