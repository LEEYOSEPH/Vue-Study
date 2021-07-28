import axios from "axios";

function registerUser(userData) {
  const url = "/api/user/joinform";
  return axios.post(url, userData);
}

function loginUser(userData) {
  const url = "/api/user/loginform";
  return axios.post(url, userData);
}

export { registerUser, loginUser };
