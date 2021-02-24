import React, { useContext } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Tab from "../Tab";
import styles from "./index.styles";
import { Context } from "../../../Context/Profile";
const TabBar = ({ state, descriptors, navigation, position }) => {
  const { state: profileState } = useContext(Context);
  return (
    <View style={styles.containerStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title;
        const isFocused = state.index === index;
        const value = profileState.profile[label];
        console.log(isFocused);
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <Tab
            value={value}
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}
            opacity={1}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
};
export default TabBar;
