import useDataContext from "../useDataContext";
import reducer from "./reducer";
import actions from "./actions";

const INITIAL_STATE = {
  posts: [],
  loading: true,
  error: "",
};

export const [Context, Provider] = useDataContext(
  INITIAL_STATE,
  reducer,
  actions
);

export default INITIAL_STATE;
