import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import ProfileHeader from "../ProfileHeader";
import Navigator from "../Navigator";
import Buttons from "../Buttons";
import Posts from "../../PostList";
import { Context as AuthContext } from "../../../Context/Auth";
import { Context as ProfileContext } from "../../../Context/Profile";
const TimeLine = () => {
  const { state: AuthState } = useContext(AuthContext);
  const { state: ProfileState } = useContext(ProfileContext);
  const renderHeader = () => {
    return (
      <>
        <ProfileHeader />
        <Navigator />
        {AuthState.id !== ProfileState.profile._id && <Buttons />}
      </>
    );
  };
  return (
    <View>
      <Posts PostHeader={renderHeader()} />
    </View>
  );
};

export default TimeLine;
