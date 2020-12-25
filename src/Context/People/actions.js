import Api from "../../Api";
import constants from "./constants";

const getPeopleAction = (dispatch) => {
  return async () => {
    try {
      const response = await Api.get("/profile/people");
      if (response.status === 200) {
        dispatch({ type: constants.getPeople, payload: response.data });
      }
    } catch (err) {
      dispatch({ type: constants.setError, payload: err.response.data });
    }
  };
};

export default {
  getPeopleAction,
};
