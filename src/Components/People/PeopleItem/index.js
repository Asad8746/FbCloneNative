import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
} from "react-native";
import { Image } from "react-native-elements";
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from "../../../theme/colors";
import FollowUnFollowComponent from "../../renderProp/Follow-Unfollow";

import styles from "./index.styles";
import { ActivityIndicator } from "react-native";

export const PeopleItem = ({ profile, onPress }) => {
  const render = (isFollowed, loading, onFollowPress) => {
    return (
      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={onFollowPress}>
          {loading ? (
            <ActivityIndicator color={colors.blue} size={14} />
          ) : isFollowed ? (
            <SimpleLineIcons
              color={colors.blue}
              size={22}
              name="user-following"
            />
          ) : (
            <SimpleLineIcons color={colors.blue} size={22} name="user-follow" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={[styles.action, { marginLeft: 10 }]}>
          <SimpleLineIcons color={colors.red} size={22} name="user-unfollow" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://vast-hollows-79591.herokuapp.com/profile/profile_pic/${profile._id}`,
            }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.nameText}>
            {profile.followed_name
              ? profile.followed_name
              : `${profile.f_name} ${profile.l_name}`}
          </Text>
          <FollowUnFollowComponent id={profile._id} render={render} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
