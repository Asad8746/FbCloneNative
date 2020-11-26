import useDataContext from "./useDataContext";
import { authConstants } from "./constants";
import Api from "../Api/axiosApi";
import setToken from "../utils/setToken";
import getToken from "../utils/getToken";
const reducer = (state, action) => {
  switch (action.type) {
    case authConstants.login:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const Login = (dispatch) => {
  return async (data) => {
    try {
      const response = await Api.post("/user/auth", data);
      if (response.status === 200) {
        const token = response.headers["x-auth-token"];
        setToken(token, () => {
          dispatch({
            type: authConstants.login,
            payload: { isAuth: true, loading: false },
          });
          console.log("done");
        });
      }
    } catch (err) {
      console.log(err.message);
    }
    dispatch({
      type: authConstants.login,
      payload: { isAuth: false, loading: false },
    });
  };
};

const checkToken = (dispatch) => {
  return async () => {
    try {
      const token = await getToken();
      console.log(token);
    } catch (err) {
      console.log(err.message);
    }
  };
};

const actions = { Login, checkToken };

export const [Context, Provider] = useDataContext(
  {
    isAuth: false,
    loading: true,
    id: "",
  },
  reducer,
  actions
);
