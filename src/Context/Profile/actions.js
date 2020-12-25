import Api from "../../Api";
import constants from "./contants";

const getProfile = (dispatch) => {
  return async (id) => {
    try {
      const response = await Api.get(`/profile/${id}`);
      if (response.status === 200) {
        dispatch({ type: constants.profile, payload: response.data });
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

const resetProfile = (dispatch) => {
  return () => {
    console.log("Profile REseting");
    dispatch({ type: constants.resetProfile });
  };
};
export default { getProfile, resetProfile };
