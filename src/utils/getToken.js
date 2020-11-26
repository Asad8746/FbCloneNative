import AsyncStorage from "@react-native-async-storage/async-storage";
export default async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    return token ? token : "";
  } catch (err) {
    console.log(err.message);
    return "";
  }
};
