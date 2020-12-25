import useDataContext from "../useDataContext";
import reducer from "./reducer";
import actions from "./actions";

export const [Context, Provider] = useDataContext(
  {
    people: [],
    loading: true,
    error: "",
  },
  reducer,
  actions
);
