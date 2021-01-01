import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import colors from "../theme/colors";
import { Context } from "../Context/Posts";
import ImageUploader from "../Components/CrreatePost/ImageUploader";
import useFormValidation from "../validation/useFormValidation";
import EmptyValidator from "../validation/EmptyValidation";
import { useNavigation } from "@react-navigation/native";

export const CreatePostScreen = () => {
  const { createPost } = useContext(Context);
  const navigation = useNavigation();
  const { state, setBlur, setState, error, isValid } = useFormValidation(
    "",
    EmptyValidator,
    "Post Description is Required"
  );
  const [image, setImage] = useState({});
  const [loader, setLoader] = useState(false);

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
            {!isValid && <Text style={styles.errorMessage}>{error}</Text>}
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
            <>
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
            </>
          </View>
        </>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  secondaryContainer: {
    width: "90%",
    alignSelf: "center",
  },
  labelText: {
    color: colors.text,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
  },
  loaderContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "rgba(119,119,119,0.4)",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  showContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  header: {
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 12,
    color: colors.text,
    fontWeight: "700",
  },
  textInputContainer: {
    backgroundColor: colors.white,
    height: 80,
    elevation: 5,
    padding: 5,
    margin: 10,
  },
  textInput: {
    height: "100%",
    width: "100%",
    fontSize: 12,
  },
  btnContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
  },
  imageUploadBtn: {
    backgroundColor: "red",
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtn: {
    backgroundColor: colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginLeft: 10,
    borderRadius: 5,
  },
  saveText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 2,
  },
  errorMessage: {
    color: "red",
    fontSize: 10,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginVertical: 10,
  },
  disableButton: {
    backgroundColor: "rgb(192,192,192)",
    color: "yellow",
  },
});
