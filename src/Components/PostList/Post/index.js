import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./index.styles";
import Actions from "../Actions";
const Post = ({ post }) => {
  console.log(post);
  const { author_id, description } = post;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://vast-hollows-79591.herokuapp.com/profile/profile_pic/${author_id._id}`,
          }}
        />
        <Text style={styles.nameTextStyle}>
          {author_id.f_name} {author_id.l_name}
        </Text>
      </View>
      <Text style={styles.descriptionStyle}>{description}</Text>
      <Image source={require("./4.jpg")} style={styles.imageStyle} />
      <Actions />
    </View>
  );
};

export default Post;
