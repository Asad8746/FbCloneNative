import useDataContext from "../useDataContext";
import actions from "./actions";
import reducer from "./reducer";
export const [Context, Provider] = useDataContext(
  {
    isAuth: false,
    loading: true,
    id: "",
    f_name: "",
    l_name: "",
  },
  reducer,
  actions
);
