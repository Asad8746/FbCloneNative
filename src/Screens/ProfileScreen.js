import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Loader from "../Components/Loader";
import TimeLine from "../Components/Profile/TimeLine";
import SafeAreaView from "../Components/SafeArea";
import { Context as ProfileContext } from "../Context/Profile";
import { Context as PostsContext } from "../Context/Posts";

export const ProfileScreen = ({ route }) => {
  const { id } = route.params;
  const { state, getPosts, resetPosts } = useContext(PostsContext);
  const { state: ProfileState, getProfile, resetProfile } = useContext(
    ProfileContext
  );
  console.log(state);
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
    <SafeAreaView style={styles.ProfileContainer}>
      <TimeLine />
      {/* <Posts /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ProfileContainer: {
    flex: 1,
  },
});
