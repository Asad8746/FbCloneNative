import AsyncStorage from "@react-native-async-storage/async-storage";
export default (token, cb) => {
  AsyncStorage.setItem("token", token)
    .then(() => cb())
    .catch((err) => console.log(err.message));
};
