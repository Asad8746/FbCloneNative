import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../../theme/colors";
import { Context } from "../../Context/Posts";
import { ImageUploader } from "../../Components";
import { useFormValidation, validator } from "../../validation";
import { useNavigation } from "@react-navigation/native";
import styles from "./index.styles";

export const CreatePostScreen = () => {
  const { createPost } = useContext(Context);
  const navigation = useNavigation();
  const { state, setBlur, blur, setState, error, isValid } = useFormValidation(
    "",
    validator,
    "Post Description is Required"
  );
  const [image, setImage] = useState({});
  const [loader, setLoader] = useState(false);
  console.log("Error", error);
  const renderPicUploader = (onPress) => {
    return (
      <TouchableOpacity style={styles.imageUploadBtn} onPress={onPress}>
        <Entypo name="image" color={colors.white} size={15} />
      </TouchableOpacity>
    );
  };

  const savePost = () => {
    if (!isValid) return;
    const data = new FormData();
    data.append("description", state);
    if (Object.keys(image).length > 0) {
      data.append("file", {
        type: "image/png",
        uri: image.uri,
        name: `temp${Math.random()}.png`,
      });
    }
    createPost(data, () => navigation.goBack());
    // console.log("Data", data);
  };
  console.log("Blur", blur);
  return (
    <TouchableOpacity
      style={{ height: "100%" }}
      onPress={() => Keyboard.dismiss()}
      activeOpacity={1}
    >
      <View style={styles.container}>
        <>
          <View style={styles.secondaryContainer}>
            <TouchableOpacity></TouchableOpacity>
            <Text style={styles.labelText}>Post Description</Text>
          </View>
          <View style={[styles.secondaryContainer, styles.textInputContainer]}>
            <TextInput
              value={state}
              onBlur={() => setBlur(true)}
              onChangeText={setState}
              style={styles.textInput}
              textAlignVertical="top"
              multiline={true}
              placeholder="Post Description"
            />
            {!isValid && blur && (
              <Text style={styles.errorMessage}>{error}</Text>
            )}
            <Text style={{ color: colors.error }}></Text>
          </View>
          <>
            {Object.keys(image).length > 0 || loader ? (
              <View style={styles.showContainer}>
                <Text style={styles.header}>Uploaded Image</Text>
                {loader ? (
                  <View style={styles.loaderContainer}>
                    <ActivityIndicator color={colors.white} size={21} />
                  </View>
                ) : (
                  <Image
                    source={{ uri: image.uri }}
                    style={{ height: 200, width: "100%", marginTop: 10 }}
                    resizeMode="cover"
                  />
                )}
              </View>
            ) : null}
          </>
          <View style={styles.btnContainer}>
            <View style={styles.row}>
              <ImageUploader
                render={renderPicUploader}
                setImage={setImage}
                setLoader={setLoader}
              />
              <TouchableOpacity
                style={[styles.saveBtn, !isValid ? styles.disableButton : {}]}
                activeOpacity={!isValid ? 1 : 0.3}
                onPress={savePost}
              >
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      </View>
    </TouchableOpacity>
  );
};
