import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./index.styles";
import { Context } from "../../../Context/Profile";

export const ProfileNavigator = () => {
  const { state } = useContext(Context);
  const { followers, following } = state.profile;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.textContainer}>
        <Text style={[styles.countTextStyle, styles.textStyle]}>10</Text>
        <Text style={[styles.descriptionText, styles.textStyle]}>Posts</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.countTextStyle, styles.textStyle]}>
          {followers}
        </Text>
        <Text style={[styles.descriptionText, styles.textStyle]}>
          Followers
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.countTextStyle, styles.textStyle]}>
          {following}
        </Text>
        <Text style={[styles.descriptionText, styles.textStyle]}>
          Following
        </Text>
      </View>
    </View>
  );
};
