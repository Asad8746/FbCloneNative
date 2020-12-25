import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import { Image } from "react-native-elements";
import Button from "../Profile/Buttons";
import colors from "../../theme/colors";
const PeopleItem = ({ profile, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://vast-hollows-79591.herokuapp.com/profile/profile_pic/${profile._id}`,
            }}
            //   source={require("./4.jpg")}
            //   source={{
            //     uri:
            //       "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            //   }}
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.nameText}>
            {profile.f_name} {profile.l_name}
          </Text>
          <Button containerStyle={{ alignSelf: "flex-start" }} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "90%",
    marginLeft: 10,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    elevation: 8,
    marginBottom: 10,
    position: "relative",
    backgroundColor: colors.white,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderRadius: 50,
    overflow: "hidden",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    transform: [{ translateX: -30 }],
    borderColor: "black",
    borderWidth: 0.5,
  },
  rightContainer: {
    marginLeft: 60,
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },

  imageStyle: {
    height: 70,
    width: 70,
  },
  nameText: {
    color: colors.blue,
  },
});
export default PeopleItem;
