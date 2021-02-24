import React, { useContext } from "react";
import PeopleList from "../../Components/PeopleList";
import { getFollowing } from "../../Context";
import { Context } from "../../Context/Profile";

const FollowerScreen = () => {
  const { state } = useContext(Context);
  const { _id } = state.profile;
  const getResource = (cb) => {
    getFollowing(_id, cb);
  };
  return (
    <PeopleList
      getResource={getResource}
      dependency={_id}
      message="No Following Found"
    />
  );
};

export default FollowerScreen;
