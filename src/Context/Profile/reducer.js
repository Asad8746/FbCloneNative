import constants from "./contants";

export default (state, action) => {
  switch (action.type) {
    case constants.profile:
      return { ...state, loading: false, profile: action.payload };
    default:
      return state;
  }
};
