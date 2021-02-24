import constants from "./contants";
import { INITIAL_STATE } from "./initState";
export default (state, action) => {
  switch (action.type) {
    case constants.profile:
      return { ...state, loading: false, profile: action.payload };
    case constants.loading:
      return { ...state, loading: action.payload };
    case constants.error:
      return { ...state, error: action.payload };
    case constants.resetProfile:
      return INITIAL_STATE;
    default:
      return state;
  }
};
