import React from "react";
import { View, Text } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import styles from "./index.styles";
import colors from "../../../theme/colors";
const index = () => {
  return (
    <>
      {/* <View style={styles.containerStyle}>
        <View style={styles.actionContainerStyle}>
          <Text style={styles.infoText}>0 Like</Text>
        </View>
        <View style={styles.actionContainerStyle}>
          <Text style={styles.infoText}>0 Comment</Text>
        </View>
      </View> */}
      <View style={styles.containerStyle}>
        <View style={styles.actionContainerStyle}>
          <Entypo name="thumbs-up" color={colors.blue} size={13} />
          <Text style={styles.actionText}>Like</Text>
        </View>
        <View style={styles.actionContainerStyle}>
          <Feather name="message-circle" color={colors.blue} size={13} />
          <Text style={styles.actionText}>Comment</Text>
        </View>
      </View>
    </>
  );
};

export default index;
