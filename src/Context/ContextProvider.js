import React from "react";
import { Provider as AuthProvider } from "./Auth";
import { Provider as ProfileProvider } from "./Profile";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <ProfileProvider>{children}</ProfileProvider>
    </AuthProvider>
  );
};

export default Provider;
