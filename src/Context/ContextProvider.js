import React from "react";
import { Provider as AuthProvider } from "./authContext";

const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
