import React, { useContext } from "react";
import { View } from "react-native";
import {
  PostList,
  ProfileNavigator,
  ProfileHeader,
  CreatePostButton,
  Buttons,
} from "../../";
import { Context as AuthContext } from "../../../Context/Auth";
import { Context as ProfileContext } from "../../../Context/Profile";
export const TimeLine = () => {
  const { state: AuthState } = useContext(AuthContext);
  const { state: ProfileState } = useContext(ProfileContext);
  const renderHeader = () => {
    return (
      <>
        <ProfileHeader />
        <ProfileNavigator />
        {AuthState.id !== ProfileState.profile._id && (
          <Buttons id={ProfileState._id} />
        )}
      </>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {AuthState.id === ProfileState.profile._id && <CreatePostButton />}
      <PostList
        PostHeader={renderHeader()}
        emptyMessage="No Posts Found Create one?"
      />
    </View>
  );
};
