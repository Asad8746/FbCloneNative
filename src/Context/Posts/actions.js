import Api from "../../Api";
import constants from "./constants";

const getPosts = (dispatch) => {
  return async (id) => {
    try {
      const response = await Api.get(`/posts/${id}`);
      if (response.status === 200) {
        dispatch({ type: constants.getPosts, payload: response.data });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};
const resetPosts = (dispatch) => {
  return () => {
    dispatch({ type: constants.resetPosts });
  };
};

export default { getPosts, resetPosts };
