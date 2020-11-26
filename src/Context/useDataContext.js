import React, { createContext, useReducer } from "react";
export default (initialState, reducer, actions) => {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const bindActions = {};
    Object.keys(actions).forEach((item) => {
      bindActions[item] = actions[item](dispatch);
    });
    return (
      <Context.Provider value={{ state, ...bindActions }}>
        {children}
      </Context.Provider>
    );
  };
  return [Context, Provider];
};
