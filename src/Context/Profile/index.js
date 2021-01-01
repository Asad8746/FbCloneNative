import useDataContext from "../useDataContext";
import actions from "./actions";
import reducer from "./reducer";
import { INITIAL_STATE } from "./initState";

export const [Context, Provider] = useDataContext(
  INITIAL_STATE,
  reducer,
  actions
);

export default INITIAL_STATE;
