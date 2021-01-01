import useDataContext from "../useDataContext";
import reducer from "./reducer";
import actions from "./actions";
import { INITIAL_STATE } from "./initState";

export const [Context, Provider] = useDataContext(
  INITIAL_STATE,
  reducer,
  actions
);
