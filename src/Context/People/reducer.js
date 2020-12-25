import constants from "./constants";

export default (state, action) => {
  switch (action.type) {
    case constants.getPeople:
      return { ...state, loading: false, people: action.payload };
    case constants.setError:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
