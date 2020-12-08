import Api from "../../Api";
import constants from "./contants";

const getProfile = (dispatch) => {
  return async (id) => {
    try {
      console.log(id);
      const response = await Api.get(`/profile/${id}`);
      if (response.status === 200) {
        dispatch({ type: constants.profile, payload: response.data });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export default { getProfile };
