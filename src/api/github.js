import axios from "axios";
var gitApi,
  gitApiBaseUrl = "https://api.github.com/users";

const getGitUserInfo = async (username) => {
  var userInfo = {},
    userInfoAddress = `${gitApiBaseUrl}/${username}`;
  try {
    const response = await axios.get(userInfoAddress);
    userInfo = response.data;
  } catch (error) {
    console.log(error);
  }

  return userInfo;
};

const getGitUserRepos = async (username) => {
  var userRepos = {},
    userReposAddress = `${gitApiBaseUrl}/${username}/repos`;
  try {
    const response = await axios.get(userReposAddress);
    userRepos = response.data;
  } catch (error) {
    console.log(error);
  }

  return userRepos;
};

gitApi = {
  getGitUserInfo,
  getGitUserRepos,
};

export default gitApi;
