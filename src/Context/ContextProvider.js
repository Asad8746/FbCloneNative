import React from "react";
import { Provider as AuthProvider } from "./Auth";
import { Provider as ProfileProvider } from "./Profile";
import { Provider as PeopleProvider } from "./People";
import { Provider as PostsProvider } from "./Posts";
const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <PostsProvider>
        <ProfileProvider>
          <PeopleProvider>{children}</PeopleProvider>
        </ProfileProvider>
      </PostsProvider>
    </AuthProvider>
  );
};

export default Provider;
