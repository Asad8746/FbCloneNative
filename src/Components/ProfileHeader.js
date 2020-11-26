import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../theme/colors";
const ProfileHeader = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.topContainerStyle}>
        <Image source={require("../p.jpg")} style={styles.coverImageStyle} />

        <View style={styles.profileContainerStyle}>
          <View style={styles.profilePicContainer}>
            <Image
              source={require("../b.png")}
              style={styles.profilePicStyle}
            />
          </View>
          <Text style={styles.nameTextStyle}>Asad khan</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: "100%",
    height: 200,
    position: "relative",
  },

  topContainerStyle: {
    height: "100%",
    width: "100%",
  },
  coverImageStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  profileContainerStyle: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  profilePicContainer: {
    height: 100,
    width: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  profilePicStyle: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  nameTextStyle: {
    color: colors.white,
    fontSize: 18,
    letterSpacing: 1,
    padding: 5,
  },
});
export default ProfileHeader;
