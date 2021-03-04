import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  checkIsFollowed,
  followUser,
  unFollowUser,
  blockUser,
} from "../../Context";
import { drawerConstants, settingsConstants } from "../../Navigators/constants";
import PropsTypes from "prop-types";
const ActionsComponent = ({ render, id }) => {
  const navigation = useNavigation();
  const [isFollowed, setIsFollowed] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    checkIsFollowed(id, (status) => {
      setIsFollowed(status);
      setLoading(false);
    });
  }, []);
  const onPress = () => {
    if (isFollowed !== null) {
      if (isFollowed) {
        unFollowUser(id, (isFollowedStatus, loadingStatus) => {
          setLoading(loadingStatus);
          if (isFollowedStatus !== null) {
            setIsFollowed(isFollowedStatus);
          }
        });
      } else {
        followUser(id, (isFollowedStatus, loadingStatus) => {
          setLoading(loadingStatus);
          if (isFollowedStatus !== null) {
            setIsFollowed(isFollowedStatus);
          }
        });
      }
    }
  };
  const onBlockPress = () => {
    blockUser(id, (blockStatus) => {
      if (blockStatus !== null && blockStatus) {
        navigation.navigate(drawerConstants.settings, {
          screen: settingsConstants.block,
        });
      }
    });
  };
  return render(isFollowed, loading, onPress, onBlockPress);
};

ActionsComponent.propTypes = {
  render: PropsTypes.func.isRequired,
  id: PropsTypes.string.isRequired,
};

export default ActionsComponent;
