import React, { useCallback, useContext } from "react";
import { SafeAreaView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Context } from "../../Context/Posts/";
import { PostList } from "../../Components/";
import styles from "./index.styles";
export const HomeScreen = () => {
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
      <PostList emptyMessage="No Posts Found" />
    </SafeAreaView>
  );
};
