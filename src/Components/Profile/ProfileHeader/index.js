import React, { useContext, useRef, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import { Image } from "react-native-elements";
import { ImageUploader } from "../../ImageUploader";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { uploadPic } from "../../../Context";
import { Context } from "../../../Context/Profile";
import { Context as AuthContext } from "../../../Context/Auth";
import theme from "../../../theme";
import { coverUrl, profileUrl } from "../../../Api/constants";

import styles from "./index.styles";

const { colors } = theme;
const WINDOW_HEIGHT = Dimensions.get("window").height;
const iconConfig = {
  size: WINDOW_HEIGHT > 840 ? 22 : 18,
  color: colors.blue,
};
export const ProfileHeader = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [loader, setLoader] = useState(false);
  const [coverPic, setCoverPic] = useState(null);
  const [covLoader, setCovLoader] = useState(false);
  const [showCoverBtn, setShowCovBtn] = useState(null);
  const [showprofileBtn, setShowProfBtn] = useState(null);
  const [updatedCoverImage, setUpdatedCoverImage] = useState(
    String(Math.random())
  );
  const [updatedProfileImage, setUpdatedProfileImage] = useState(
    String(Math.random())
  );

  const navigation = useNavigation();
  const { state } = useContext(Context);
  const { state: AuthState } = useContext(AuthContext);
  const translateX = useRef(new Animated.Value(110)).current;
  const translateY = useRef(new Animated.Value(70)).current;
  const translateYIcon = useRef(new Animated.Value(50)).current;

  const { _id, f_name, l_name } = state.profile;
  const isAuth = AuthState.id === _id;

  const animateUploadButton = (value) => {
    Animated.timing(translateX, {
      toValue: value,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const animateIconContainer = (value) => {
    Animated.timing(translateYIcon, {
      toValue: value,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const animateProfileUploadButton = (value, animateIcon) => {
    Animated.timing(translateY, {
      toValue: value,
      duration: 200,
      useNativeDriver: true,
    }).start(() =>
      animateIcon ? animateIconContainer(0) : translateYIcon.setValue(50)
    );
  };

  useEffect(() => {
    if (showCoverBtn !== null) {
      if (showCoverBtn) {
        animateUploadButton(-20);
      } else {
        animateUploadButton(110);
      }
    }
  }, [showCoverBtn]);
  useEffect(() => {
    if (showprofileBtn !== null) {
      if (showprofileBtn) {
        animateProfileUploadButton(0, true);
      } else {
        animateProfileUploadButton(70, false);
      }
    }
  }, [showprofileBtn]);

  const renderCoverUploadButton = (onPress) => {
    return (
      <Animated.View
        style={[styles.uploadButtonContainer, { transform: [{ translateX }] }]}
      >
        {coverPic && (
          <TouchableOpacity
            style={[styles.coverButton, { marginRight: 5 }]}
            onPress={() => setCoverPic(null)}
          >
            <FontAwesome
              name="remove"
              size={iconConfig.size}
              color={iconConfig.color}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.coverButton}
          onPress={() => {
            if (coverPic) {
              setCovLoader(true);
              return uploadPic("upload/cover", coverPic, () => {
                setUpdatedCoverImage(String(Math.random()));
                setCoverPic(null);
                setCovLoader(false);
              });
            }
            onPress();
          }}
        >
          {covLoader ? (
            <ActivityIndicator size={14} color={colors.blue} />
          ) : !coverPic ? (
            <AntDesign
              name="camera"
              size={iconConfig.size}
              color={iconConfig.color}
            />
          ) : (
            <FontAwesome
              name="check"
              size={iconConfig.size}
              color={iconConfig.color}
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const renderProfilePicActionIcons = () => {
    return (
      <View style={styles.profileActionContainer}>
        <TouchableOpacity
          style={styles.profileAction}
          onPress={() => {
            translateYIcon.setValue(0);
            setProfilePic(null);
          }}
        >
          <FontAwesome
            name="remove"
            size={iconConfig.size}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity
          style={styles.profileAction}
          onPress={() => {
            setLoader(true);
            uploadPic("upload/dp", profilePic, () => {
              setUpdatedProfileImage(String(Math.random()));
              translateYIcon.setValue(0);
              setProfilePic(null);
              setLoader(false);
            });
          }}
        >
          {loader ? (
            <ActivityIndicator size={14} color={colors.white} />
          ) : (
            <FontAwesome
              name="check"
              size={iconConfig.size}
              color={colors.white}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const renderProfileUploadButton = (onPress) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          if (AuthState.id === _id) {
            setShowProfBtn((prevState) => !prevState);
          }
        }}
      >
        <View style={styles.profilePicContainer}>
          <Image
            source={{
              uri: profilePic
                ? profilePic.uri
                : `${profileUrl}${_id}?some=${updatedProfileImage}`,
            }}
            style={styles.profilePicStyle}
          />
          {isAuth && (
            <Animated.View
              style={[
                styles.profileOverlayContainer,
                {
                  transform: [{ translateY }],
                },
              ]}
            >
              {profilePic ? (
                renderProfilePicActionIcons()
              ) : (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={onPress}
                >
                  <Animated.View
                    style={{ transform: [{ translateY: translateYIcon }] }}
                  >
                    {loader ? (
                      <ActivityIndicator size={14} color={colors.white} />
                    ) : (
                      <AntDesign
                        name="camera"
                        size={iconConfig.size}
                        color={colors.white}
                      />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              )}
            </Animated.View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerStyle}>
      {!isAuth && (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.backButtonStyle}>
            <MaterialIcons
              name="navigate-before"
              color={colors.white}
              size={25}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          isAuth ? setShowCovBtn((prevState) => !prevState) : null
        }
      >
        <ImageBackground
          source={{
            uri: coverPic
              ? coverPic.uri
              : `${coverUrl}${_id}?some=${updatedCoverImage}`,
          }}
          resizeMode="cover"
          style={styles.coverImageStyle}
        >
          <LinearGradient
            colors={["transparent", "transparent", "rgba(0,0,0,0.7)"]}
            style={{ flex: 1 }}
          >
            {isAuth && (
              <ImageUploader
                render={renderCoverUploadButton}
                setImage={setCoverPic}
                setLoader={setCovLoader}
              />
            )}
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <View style={styles.profileContainerStyle}>
          <ImageUploader
            render={renderProfileUploadButton}
            setImage={setProfilePic}
            setLoader={setLoader}
          />
        </View>

        <Text style={styles.nameTextStyle}>
          {f_name} {l_name}
        </Text>
      </View>
    </View>
  );
};
