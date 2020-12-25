import useDataContext from "../useDataContext";
import actions from "./actions";
import reducer from "./reducer";

const INITIAL_STATE = { profile: {}, loading: true };
export const [Context, Provider] = useDataContext(
  INITIAL_STATE,
  reducer,
  actions
);

export default INITIAL_STATE;
