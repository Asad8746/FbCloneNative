import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProfileHeader from "../Components/ProfileHeader";
import { ProfileNavigator } from "../Navigators/ProfileNavigator";
const posts = [
  {
    id: "1",
    name: "Asad khan",
    post: "Something",
  },
  {
    id: "2",
    name: "Asad khan",
    post: "Something",
  },
  {
    id: "3",
    name: "Asad khan",
    post: "Something",
  },
  {
    id: "4",
    name: "Asad khan",
    post: "Something",
  },
];
export const ProfileScreen = () => {
  return (
    <View style={styles.ProfileContainer}>
      <ProfileHeader />
      <ProfileNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileContainer: {
    flex: 1,
  },
});
