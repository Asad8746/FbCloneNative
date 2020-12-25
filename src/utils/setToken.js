import AsyncStorage from "@react-native-async-storage/async-storage";
export default (token, cb) => {
  return AsyncStorage.setItem("token", token)
    .then(() => {
      console.log("Token is stored");
      cb();
    })
    .catch((err) => console.log(err.message));
};
