import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const api = axios.create({
  baseURL: "https://vast-hollows-79591.herokuapp.com",
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    config.headers["x-auth-token"] = token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
