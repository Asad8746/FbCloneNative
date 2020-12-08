import useDataContext from "../useDataContext";
import actions from "./actions";
import reducer from "./reducer";

export const [Context, Provider] = useDataContext(
  { profile: {}, loading: true },
  reducer,
  actions
);
