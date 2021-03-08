import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { ImageComponent } from "../../Image";
import { SimpleLineIcons } from "@expo/vector-icons";
import FollowUnFollowComponent from "../../renderProp/Actions";
import PropTypes from "prop-types";
import colors from "../../../theme/colors";

import styles from "./index.styles";
import { profileUrl } from "../../../Api/constants";

export const PeopleItem = ({ profile, onPress }) => {
  const render = (isFollowed, loading, onFollowPress, onBlockPress) => {
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
        <TouchableOpacity
          style={[styles.action, { marginLeft: 10 }]}
          onPress={onBlockPress}
        >
          <SimpleLineIcons color={colors.red} size={22} name="user-unfollow" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageComponent
            source={{
              uri: `${profileUrl}${profile._id}`,
            }}
            customStyle={styles.imageStyle}
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
PeopleItem.defaultProps = {
  profile: {},
  onPress: () => console.log("I am pressed"),
};
PeopleItem.propTypes = {
  profile: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};
