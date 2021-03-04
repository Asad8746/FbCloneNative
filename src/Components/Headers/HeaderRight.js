import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Context as ProfileContext } from "../../Context/Profile";
import { Context as AuthContext } from "../../Context/Auth";

import theme from "../../theme";
const { height, width } = Dimensions.get("window");
export const FollowNavigatorHeader = () => {
  const navigation = useNavigation();
  const { state: profileState } = useContext(ProfileContext);
  const { state: authState } = useContext(AuthContext);
  const { _id, f_name, l_name } = profileState.profile;
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={navigation.goBack}
      >
        <FontAwesome
          name="long-arrow-left"
          color={theme.colors.white}
          size={20}
        />
      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <Text
          style={styles.nameStyle}
          numberOfLines={1}
        >{`${f_name} ${l_name}`}</Text>
      </View>

      <TouchableOpacity style={styles.iconContainer}>
        {authState.id !== _id ? (
          <FontAwesome5 name="user-plus" color={theme.colors.white} size={20} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height: 60,
    backgroundColor: theme.colors.blue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  nameStyle: {
    ...theme.typography.h1,
    fontSize: height > 800 ? 25 : 16,
    color: "white",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  iconContainer: {
    width: 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FollowNavigatorHeader;
