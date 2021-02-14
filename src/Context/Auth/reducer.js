import authConstants from "./constants";

export default (state, action) => {
  switch (action.type) {
    case authConstants.SET_AUTH:
      console.log({
        ...state,
        isAuth: true,
        loading: false,
        ...action.payload,
      });
      return { ...state, isAuth: true, loading: false, ...action.payload };
    case authConstants.SET_LOADING:
      const { loading } = action.payload;
      return { ...state, loading };
    case authConstants.SET_ERROR:
      const { error } = action.payload;
      return { ...state, error };
    default:
      return state;
  }
};
