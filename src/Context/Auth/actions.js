import Api from "../../Api";
import setToken from "../../utils/setToken";
import authConstants from "./constants";
const Login = (dispatch) => {
  return async (data, cb) => {
    try {
      const response = await Api.post("/user/auth", data);
      if (response.status === 200) {
        const token = response.headers["x-auth-token"];
        setToken(token, () => {
          dispatch({
            type: authConstants.SET_AUTH,
            payload: response.data,
          });
        });
      }
    } catch (err) {
      if (err.response && cb) {
        cb(err.response.data);
        dispatch({
          type: authConstants.SET_LOADING,
          payload: err.response.data,
        });
      }
    }
  };
};

const checkToken = (dispatch) => {
  return async () => {
    try {
      const response = await Api.get("/profile/checktoken");
      if (response.status === 200) {
        const { id, f_name, l_name } = response.data;
        dispatch({
          type: authConstants.SET_AUTH,
          payload: { id, f_name, l_name },
        });
      }
    } catch (err) {
      dispatch({
        type: authConstants.SET_LOADING,
        payload: false,
      });
      console.log(err.response.data);
    }
  };
};

const registerUser = (dispatch) => {
  return async (data) => {
    try {
      const response = await Api.post("/user/register", data);
      if (response.status === 200) {
        const token = response.headers["x-auth-token"];
        setToken(token, () => {
          dispatch({
            type: authConstants.register,
            payload: { isAuth: true, loading: false },
          });
        });
      }
    } catch (err) {
      dispatch({
        type: authConstants.register,
        payload: { isAuth: false, loading: false },
      });
      console.log(err.response.data);
    }
  };
};

export default { Login, checkToken, registerUser };
