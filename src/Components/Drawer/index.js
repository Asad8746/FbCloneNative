import React, { useContext } from "react";
import { View, Text, ImageBackground } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image } from "react-native-elements";
import styles from "./index.styles";
import { Context } from "../../Context/Auth";
export const DrawerContent = (props) => {
  const { state } = useContext(Context);
  const { id, f_name, l_name } = state;
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground
        style={styles.topContainerStyle}
        source={require("../../Image/back1.jpg")}
        resizeMode="cover"
      >
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: `https://vast-hollows-79591.herokuapp.com/profile/profile_pic/${id}`,
              }}
            />
          </View>
          <Text style={styles.nameStyle}>{`${f_name} ${l_name}`}</Text>
        </View>
      </ImageBackground>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
