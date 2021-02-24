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
      console.log("ProfileActionError", err.response.data);
      dispatch({ type: constants.loading, payload: false });
      dispatch({ type: constants.error, payload: "Opps Something goes wrong" });
    }
  };
};

const resetProfile = (dispatch) => {
  return () => {
    dispatch({ type: constants.resetProfile });
  };
};
export default { getProfile, resetProfile };
