import React, { useEffect, useState, useContext } from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import styles from "./index.styles";
import { Context } from "../../../Context/Profile";
import colors from "../../../theme/colors";
import FollowUnFollowComponent from "../../renderProp/Follow-Unfollow";
export const Buttons = ({ containerStyle }) => {
  const { state } = useContext(Context);
  const { profile } = state;
  const render = (isFollowed, loading, onPress) => {
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        <TouchableOpacity
          style={[styles.buttonContainer, styles.followButton]}
          onPress={onPress}
        >
          <Text style={[styles.textStyle, styles.followText]}>
            {loading ? (
              <ActivityIndicator color={colors.white} size={14} />
            ) : isFollowed ? (
              "Unfollow"
            ) : (
              "Follow"
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.blockButton]}>
          <Text style={[styles.textStyle, styles.followText]}>Block</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return <FollowUnFollowComponent render={render} id={profile._id} />;
};
