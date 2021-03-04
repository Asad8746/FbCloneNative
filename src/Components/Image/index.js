import React from "react";
import { ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
export const ImageComponent = ({ customStyle, source }) => {
  return (
    <Image
      source={source}
      containerStyle={customStyle}
      PlaceholderContent={<ActivityIndicator />}
      resizeMode="cover"
    />
  );
};
