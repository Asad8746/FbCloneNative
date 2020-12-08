import React, { useContext } from "react";
import { View, Text, Image } from "react-native";
import styles from "./index.styles";
import { Context } from "../../../Context/Profile";

const ProfileHeader = () => {
  const { state } = useContext(Context);
  const { _id, f_name, l_name } = state.profile;
  return (
    <View style={styles.containerStyle}>
      <Image
        source={{
          uri: `https://vast-hollows-79591.herokuapp.com/profile/cover/${_id}`,
        }}
        style={styles.coverImageStyle}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.profileContainerStyle}>
          <View style={styles.profilePicContainer}>
            <Image
              source={{
                uri: `https://vast-hollows-79591.herokuapp.com/profile/profile_pic/${_id}`,
              }}
              style={styles.profilePicStyle}
            />
          </View>
        </View>
        <Text style={styles.nameTextStyle}>
          {f_name} {l_name}
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
