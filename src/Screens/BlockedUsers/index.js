import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Loader, SafeAreaComponent, ImageComponent } from "../../Components";
import List from "../../Components/PeopleList/index";
import { getBlockUsers, unBlockUser } from "../../Context";
import { settingsConstants } from "../../Navigators/constants";
import styles from "./index.styles";
export const BlockedUsersScreen = () => {
  const navigation = useNavigation();
  const keyExtractor = (item) => item._id._id;
  const renderItem = (item) => {
    const { _id, f_name, l_name } = item._id;
    return (
      <View style={styles.itemStyle}>
        <View style={styles.leftContainer}>
          <ImageComponent
            customStyle={styles.itemImage}
            source={{
              uri: `https://vast-hollows-79591.herokuapp.com/profile/profile_pic/${_id}`,
            }}
          />
          <Text style={styles.nameStyle}>{`${f_name} ${l_name}`}</Text>
        </View>
        <TouchableOpacity
          style={styles.blockButton}
          onPress={() =>
            unBlockUser(_id, () =>
              navigation.navigate(settingsConstants.settings)
            )
          }
        >
          <Text style={styles.blockButtonText}>UnBlock</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const getResource = (cb) => {
    getBlockUsers(cb);
  };
  return (
    <SafeAreaComponent>
      <View
        style={{
          width: "80%",
          alignSelf: "center",
          flex: 1,
        }}
      >
        <List
          getResource={getResource}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          dependency={[]}
          message="No Blocked Users Found"
        />
      </View>
    </SafeAreaComponent>
  );
};
