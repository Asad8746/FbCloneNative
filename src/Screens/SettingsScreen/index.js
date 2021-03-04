import React from "react";
import { View, Text } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import theme from "../../theme";
import SettingItem from "../../Components/Settings/SettingsItem";
import styles from "./index.styles";
import { useNavigation } from "@react-navigation/native";
import { settingsConstants } from "../../Navigators/constants";
import { SafeAreaComponent } from "../../Components/SafeArea";
const iconConfig = {
  size: 15,
  color: theme.colors.blue,
};

export const SettingsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaComponent>
      <View style={styles.container}>
        {[
          {
            label: "Blocked Users",
            icon: () => (
              <FontAwesome5
                size={iconConfig.size}
                color={iconConfig.color}
                name="user-slash"
              />
            ),
            onPress: () => navigation.navigate(settingsConstants.block),
          },
        ].map((item, idx) => (
          <SettingItem
            key={idx}
            label={item.label}
            icon={item.icon}
            onPress={item.onPress}
          />
        ))}
      </View>
    </SafeAreaComponent>
  );
};
