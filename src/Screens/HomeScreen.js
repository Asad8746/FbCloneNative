import React, { useCallback, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Context } from "../Context/Posts/";
import PostList from "../Components/PostList";
import Loader from "../Components/Loader";
import { SafeAreaView } from "react-native";
const HomeScreen = () => {
  const { getPostsForHome, resetPosts } = useContext(Context);
  useFocusEffect(
    useCallback(() => {
      getPostsForHome();
      return () => {
        resetPosts();
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <PostList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
  },
});
export default HomeScreen;
