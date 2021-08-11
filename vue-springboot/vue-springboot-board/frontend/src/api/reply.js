import axios from "axios";

/* 댓글 등록 */
function insertReply(replyData) {
  const url = "/api/reply/insertreply";
  return axios.post(url, replyData);
}

/* 댓글 조회 */
function fetchReply(replyData) {
  const url = "/api/reply/fetchReply";
  return axios.post(url, replyData);
}

/* 댓글 삭제 */
function deleteReply(replyData) {
  const url = "/api/reply/deleteReply";
  return axios.post(url, replyData);
}

/* 댓글 수정 */
function editReply(replyData) {
  const url = "/api/reply/editReply";
  return axios.put(url, replyData);
}

export { insertReply, fetchReply, deleteReply, editReply };
