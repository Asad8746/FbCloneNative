import authConstants from "./constants";

export default (state, action) => {
  switch (action.type) {
    case authConstants.SET_AUTH:
      console.log(action.type);
      console.log({
        ...state,
        isAuth: true,
        loading: false,
        ...action.payload,
      });
      return { ...state, isAuth: true, loading: false, ...action.payload };
    case authConstants.SET_LOADING:
      console.log("Lo", {
        ...state,
        isAuth: false,
        loading: false,
        error: action.payload,
      });
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
