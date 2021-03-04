import React, { useContext } from "react";
import PeopleList from "../../Components/PeopleList";
import { PeopleItem } from "../../Components";

import { getFollowing } from "../../Context";
import { Context } from "../../Context/Profile";

const FollowerScreen = () => {
  const { state } = useContext(Context);
  const { _id } = state.profile;
  const getResource = (cb) => {
    getFollowing(_id, cb);
  };
  const keyExtractor = (item) => item._id;
  const renderrItem = (item) => {
    return (
      <PeopleItem profile={item} onPress={() => console.log("I am pressed")} />
    );
  };
  return (
    <PeopleList
      getResource={getResource}
      dependency={[_id]}
      keyExtractor={keyExtractor}
      message="No Following Found"
      renderItem={renderrItem}
    />
  );
};

export default FollowerScreen;
