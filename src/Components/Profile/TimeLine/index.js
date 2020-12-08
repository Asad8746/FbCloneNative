import React, { useContext } from "react";
import { View, Text } from "react-native";
import ProfileHeader from "../ProfileHeader";
import Navigator from "../Navigator";
import Buttons from "../Buttons";
import { Context as AuthContext } from "../../../Context/Auth";
import { Context as ProfileContext } from "../../../Context/Profile";
const TimeLine = () => {
  const { state: AuthState } = useContext(AuthContext);
  const { state: ProfileState } = useContext(ProfileContext);
  return (
    <View>
      <ProfileHeader />
      <Navigator />
      {AuthState.id !== ProfileState.profile._id && <Buttons />}
    </View>
  );
};

export default TimeLine;
