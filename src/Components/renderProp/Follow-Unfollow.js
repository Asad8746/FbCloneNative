import React, { useState, useEffect } from "react";
import { checkIsFollowed, followUser, unFollowUser } from "../../Context";

const FollowUnFollowComponent = ({ render, id }) => {
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

  return render(isFollowed, loading, onPress);
};

export default FollowUnFollowComponent;
