import Api from "../Api";
export const checkIsFollowed = async (id, cb = () => {}) => {
  try {
    console.log("follower ID", id);
    const response = await Api.get(`/follower/checkfollower/${id}`);
    if (response.status === 200) {
      cb(response.data);
    }
  } catch (err) {
    console.log("IsFollowed", err.response);
    cb(false);
  }
};

export const followUser = async (id, cb = () => {}) => {
  try {
    const response = await Api.put(`/follower/follow/${id}`);
    cb(null, true);
    if (response.status === 200) {
      cb(true, false);
    }
  } catch (err) {
    console.log("FollowUser", err.response.data);
    cb(null, false);
  }
};
export const unFollowUser = async (id, cb = () => {}) => {
  try {
    const response = await Api.put(`/follower/unfollow/${id}`);
    cb(null, true);
    if (response.status === 200) {
      cb(false);
    }
  } catch (err) {
    console.log(err.response.data);
    cb(null);
  }
};

export const getFollowing = async (id, cb = () => {}) => {
  try {
    const response = await Api.get(`/follower/following/${id}`);
    if (response.status === 200 && response.data) {
      cb(response.data, false, "");
    }
  } catch (err) {
    console.log(err.message);
    cb(data, false, err.response.data);
  }
};
