import axios from "axios";

/* 좋아요 체크 */
function likesCheck(likesData) {
  const url = "/api/likes/likesCheck";
  return axios.post(url, likesData);
}

export { likesCheck };
