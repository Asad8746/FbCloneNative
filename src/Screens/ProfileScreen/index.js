import React, { useCallback, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TimeLine, Loader, SafeAreaComponent } from "../../Components";
import { Context as ProfileContext } from "../../Context/Profile";
import { Context as PostsContext } from "../../Context/Posts";
import styles from "./index.styles";
export const ProfileScreen = ({ route }) => {
  const { id } = route.params;
  const { getPosts, resetPosts } = useContext(PostsContext);
  const { state: ProfileState, getProfile, resetProfile } = useContext(
    ProfileContext
  );
  useFocusEffect(
    useCallback(() => {
      getProfile(id);
      getPosts(id);
      return () => {
        resetProfile();
        resetPosts();
      };
    }, [id])
  );

  if (ProfileState.loading) {
    return <Loader />;
  }
  return (
    <SafeAreaComponent style={styles.ProfileContainer}>
      <TimeLine />
    </SafeAreaComponent>
  );
};
