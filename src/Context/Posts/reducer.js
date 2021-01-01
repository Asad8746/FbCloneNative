import constants from "./constants";
import { INITIAL_STATE } from "./initState";
export default (state, action) => {
  switch (action.type) {
    case constants.getPosts:
      return { ...state, loading: false, posts: action.payload };
    case constants.resetPosts:
      return INITIAL_STATE;
    default:
      return state;
  }
};
