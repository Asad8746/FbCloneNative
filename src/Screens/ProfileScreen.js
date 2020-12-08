import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Loader from "../Components/Loader";
import TimeLine from "../Components/Profile/TimeLine";
import { Context as ProfileContext } from "../Context/Profile";
import { Context as AuthContext } from "../Context/Auth";

export const ProfileScreen = ({ route }) => {
  const { id } = route.params;
  const { state: ProfileState, getProfile } = useContext(ProfileContext);
  const { state: AuthState } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      getProfile(id);
    }, [id])
  );

  if (ProfileState.loading) {
    return <Loader />;
  }
  return (
    <View style={styles.ProfileContainer}>
      <TimeLine />
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileContainer: {
    flex: 1,
  },
});
