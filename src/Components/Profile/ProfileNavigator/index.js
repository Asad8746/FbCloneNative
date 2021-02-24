import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./index.styles";
import { Context } from "../../../Context/Profile";
import Tab from "../Tab";
import { useNavigation } from "@react-navigation/native";
import {
  profileConstants,
  ProfileTopTabNavigatorConstants,
} from "../../../Navigators/constants";
export const ProfileNavigator = () => {
  const { state } = useContext(Context);
  const { _id, followers, following } = state.profile;
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <Tab
        onPress={() => {}}
        onLongPress={() => {}}
        isFocused={true}
        label="Posts"
        value={10}
      />
      <Tab
        onPress={() =>
          navigation.navigate(profileConstants.followNavigator, {
            screen: ProfileTopTabNavigatorConstants.followers,
            params: {
              id: _id,
            },
          })
        }
        onLongPress={() => {}}
        isFocused={false}
        label={followers > 1 ? "Followers" : "Follower"}
        value={followers}
      />
      <Tab
        onPress={() =>
          navigation.navigate(profileConstants.followNavigator, {
            screen: ProfileTopTabNavigatorConstants.following,
            params: {
              id: _id,
            },
          })
        }
        onLongPress={() => {}}
        isFocused={false}
        label="Following"
        value={following}
      />
    </View>
  );
};
