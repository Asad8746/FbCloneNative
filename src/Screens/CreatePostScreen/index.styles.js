import { StyleSheet } from "react-native";
import theme from "../../theme";
const { colors } = theme;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  secondaryContainer: {
    width: "90%",
    alignSelf: "center",
  },
  labelText: {
    color: colors.text,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
  },

  loaderContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "rgba(119,119,119,0.4)",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  showContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  header: {
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 12,
    color: colors.text,
    fontWeight: "700",
  },
  textInputContainer: {
    backgroundColor: colors.white,
    height: 80,
    elevation: 5,
    padding: 5,
    margin: 10,
  },
  textInput: {
    height: "100%",
    width: "100%",
    fontSize: 12,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",

    marginBottom: 10,
    width: "100%",
  },
  row: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },
  imageUploadBtn: {
    backgroundColor: "red",
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtn: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginLeft: 10,
    borderRadius: 5,
  },
  saveText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 2,
  },
  errorMessage: {
    color: "red",
    fontSize: 10,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginVertical: 10,
  },
  disableButton: {
    backgroundColor: "rgb(192,192,192)",
  },
});

export default styles;
