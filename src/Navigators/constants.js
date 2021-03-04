const drawer = "drawer";
const auth = "auth";
const people = "people";

const profile = "profile";
const settings = "settings";
export const authConstants = {
  login: `${auth}/login`,
  register: `${auth}/register`,
};

export const peopleConstants = {
  peopleList: `${people}/List`,
  profile: `${people}/Profile`,
};

export const profileConstants = {
  profile: `${profile}/user`,
  createPost: `${profile}/createPost`,
  followNavigator: `${profile}/followNavigator`,
};

export const ProfileTopTabNavigatorConstants = {
  followers: `${profile}/followers`,
  following: `${profile}/following`,
};

export const userConstansts = {
  profile: `${profile}/me`,
  createPost: `${profile}/post/create`,
};

export const settingsConstants = {
  settings: `${settings}/initial`,
  block: `${settings}/block`,
};

export const drawerConstants = {
  home: `${drawer}/home`,
  settings: `${drawer}/settings`,
};
