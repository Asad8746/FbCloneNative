import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./index.styles";

import { Context } from "../../../Context/Profile";
import { Context as AuthContext } from "../../../Context/Auth";
import { color } from "react-native-reanimated";
import colors from "../../../theme/colors";
import { ImageBackground } from "react-native";

const ProfileHeader = () => {
  const { state } = useContext(Context);
  const { state: AuthState } = useContext(AuthContext);

  const { _id, f_name, l_name } = state.profile;
  return (
    <View style={styles.containerStyle}>
      {AuthState.id !== _id && (
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            // borderRadius: 40,
            justifyContent: "center",
            alignItems: "flex-end",
            position: "absolute",
            left: 0,
            top: 24,
            height: 30,
            borderBottomRightRadius: 30,
            // borderTopRightRadius: -5,
            zIndex: 999,
            padding: 5,
          }}
        >
          <MaterialIcons
            name="navigate-before"
            color={colors.white}
            size={25}
          />
        </View>
      )}
      <ImageBackground
        source={{
          uri: `https://vast-hollows-79591.herokuapp.com/profile/cover/${_id}`,
        }}
        resizeMode="cover"
        style={styles.coverImageStyle}
      >
        <LinearGradient
          colors={["transparent", "transparent", "rgba(0,0,0,0.7)"]}
          style={{ flex: 1 }}
        ></LinearGradient>
      </ImageBackground>
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
