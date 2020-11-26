import axios from "axios";
import getToken from "../utils/getTokenHeader";
export default axios.create({
  baseURL: "https://vast-hollows-79591.herokuapp.com/",
  headers: {
    ...getToken(),
  },
});
