import authConstants from "./constants";

export default (state, action) => {
  switch (action.type) {
    case authConstants.AUTH:
      return { ...state, isAuth: true, loading: false, ...action.payload };
    default:
      return state;
  }
};
