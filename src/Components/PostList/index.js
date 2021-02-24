import React, { useContext, useRef } from "react";
import { Animated } from "react-native";
import Post from "./Post";
import { Context } from "../../Context/Posts";

import { Loader } from "../../Components/Loader";
import { Empty } from "../../Components/Empty";

export const PostList = ({ PostHeader, emptyMessage }) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const { state } = useContext(Context);
  if (state.loading) {
    return <Loader />;
  }
  return (
    <Animated.FlatList
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: translateY } } }],
        { useNativeDriver: true }
      )}
      contentContainerStyle={{ flexGrow: 1 }}
      ListHeaderComponent={PostHeader ? PostHeader : null}
      data={state.posts}
      ListEmptyComponent={() => <Empty message={emptyMessage} />}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
};

PostList.defaultProps = {
  PostHeader: null,
};
