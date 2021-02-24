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

const getPostsForHome = (dispatch) => {
  return async () => {
    try {
      const response = await Api.get("/home/");
      if (response.status === 200) {
        dispatch({ type: constants.getPosts, payload: response.data });
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};

const createPost = (dispatch) => {
  return async (data, cb) => {
    try {
      const response = await Api.post("/posts/create", data);
      if (response.status === 200) {
        cb();
      }
    } catch (err) {
      console.log(err.message);
    }
  };
};
export default { getPosts, resetPosts, getPostsForHome, createPost };
