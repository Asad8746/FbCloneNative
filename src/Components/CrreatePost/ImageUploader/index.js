import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./index.styles";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import colors from "../../../theme/colors";

const ImageUploader = ({ render, setImage, setLoader }) => {
  const onButtonClick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
    });
    if (!result.cancelled) {
      setLoader(true);
      result = await ImageManipulator.manipulateAsync(
        result.uri,
        [{ resize: { height: 600, width: 600 } }],
        { compress: 0.6 }
      );
      setLoader(false);
      setImage(result);
    }
  };
  return render(onButtonClick);
};

export default ImageUploader;
