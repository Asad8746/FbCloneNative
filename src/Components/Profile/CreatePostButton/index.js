import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../../theme/colors";
import styles from "./index.styles";
import { userConstansts } from "../../../Navigators/constants";
export const CreatePostButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(userConstansts.createPost)}
    >
      <AntDesign name="plus" size={18} color={colors.white} />
    </TouchableOpacity>
  );
};
