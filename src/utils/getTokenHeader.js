import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  let token;

  AsyncStorage.getItem("token")
    .then((result) => {
      token = result;
    })
    .catch((err) => {
      console.log("Get Header", err.message);
    });
  console.log(token);
  return token ? { "x-auth-token": token } : {};
};
