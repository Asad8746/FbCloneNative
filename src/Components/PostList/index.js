import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import Post from "./Post";
import { Context } from "../../Context/Posts";

import { Loader } from "../../Components/Loader";
import { Empty } from "../../Components/Empty";

export const PostList = ({ PostHeader, emptyMessage }) => {
  const { state } = useContext(Context);
  if (state.loading) {
    return <Loader />;
  }

  return (
    <FlatList
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
