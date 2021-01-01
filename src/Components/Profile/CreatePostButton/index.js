import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../theme/colors";
import { profileConstants } from "../../../Navigators/constants";
const CreatePostButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(profileConstants.createPost)}
    >
      <AntDesign name="plus" size={18} color={colors.white} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 999,
    backgroundColor: colors.blue,
    height: 45,
    width: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostButton;
