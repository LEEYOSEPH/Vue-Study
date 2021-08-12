import axios from "axios";

function insertReReply(replyData) {
  const url = "/api/rereply/insertrereply";
  return axios.post(url, replyData);
}

function fetchRereply(replyData) {
  const url = "/api/rereply/fetchRereply";
  return axios.post(url, replyData);
}

function editRereply(replyData) {
  const url = "/api/rereply/editRereply";
  return axios.put(url, replyData);
}

function deleteRereply(replyData) {
  const url = "/api/rereply/deleteRereply";
  return axios.post(url, replyData);
}
export { insertReReply, fetchRereply, editRereply, deleteRereply };
