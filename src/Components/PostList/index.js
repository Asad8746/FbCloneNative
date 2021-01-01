import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import Post from "./Post";
import { Context } from "../../Context/Posts";

import Loader from "../../Components/Loader";
const PostList = ({ PostHeader }) => {
  const { state } = useContext(Context);
  if (state.loading) {
    return <Loader />;
  }

  return (
    <FlatList
      ListHeaderComponent={PostHeader ? PostHeader : null}
      data={state.posts}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <Post post={item} />}
    />
  );
};

PostList.defaultProps = {
  PostHeader: null,
};
export default PostList;
