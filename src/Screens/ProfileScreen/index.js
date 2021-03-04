import React, { useContext, useEffect } from "react";
import { TimeLine, Loader, SafeAreaComponent } from "../../Components";
import { Context as ProfileContext } from "../../Context/Profile";
import { Context as PostsContext } from "../../Context/Posts";
import styles from "./index.styles";
export const ProfileScreen = ({ route }) => {
  const { id } = route.params;
  const { getPosts, resetPosts } = useContext(PostsContext);
  const { state: profileState, getProfile, resetProfile } = useContext(
    ProfileContext
  );
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("Profile Id", profileState.profile._id);
  //     if (id !== profileState.profile._id) {
  //       getProfile(id);
  //       getPosts(id);
  //     }
  //   }, [id])
  // );
  useEffect(() => {
    if (id !== profileState.profile._id) {
      getProfile(id);
      getPosts(id);
    }
  }, [id]);
  if (profileState.loading) {
    return <Loader />;
  }
  return (
    <SafeAreaComponent style={styles.ProfileContainer}>
      <TimeLine />
    </SafeAreaComponent>
  );
};
