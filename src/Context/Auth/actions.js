import Api from "../../Api";
import setToken from "../../utils/setToken";
import authConstants from "./constants";
const Login = (dispatch) => {
  return async (data) => {
    try {
      const response = await Api.post("/user/auth", data);
      if (response.status === 200) {
        const token = response.headers["x-auth-token"];
        setToken(token, () => {
          dispatch({
            type: authConstants.Auth,
            payload: { isAuth: true, loading: false },
          });
        });
      }
    } catch (err) {
      console.log(err.response.data);
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
      const response = await Api.get("/profile/checktoken");
      if (response.status === 200) {
        const { id, f_name, l_name } = response.data;
        dispatch({
          type: authConstants.AUTH,
          payload: { id, f_name, l_name },
        });
      }
    } catch (err) {
      dispatch({
        type: authConstants.AUTH,
        payload: { isAuth: false, loading: false },
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
