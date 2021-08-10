import axios from "axios";

/* 좋아요 하기 */
function insertLikes(likesData) {
  const url = "/api/likes/insertLikes";
  return axios.post(url, likesData);
}

/* 좋아요 취소 */
function updateLikes(likesData) {
  const url = "/api/likes/updateLikes";
  return axios.put(url, likesData);
}

/* 좋아요 체크 */
function likesCheck(likesData) {
  const url = "/api/likes/likesCheck";
  return axios.post(url, likesData);
}
export { insertLikes, updateLikes, likesCheck };
