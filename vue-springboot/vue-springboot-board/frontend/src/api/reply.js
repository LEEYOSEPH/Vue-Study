import axios from "axios";

function insertReply(replyData) {
  const url = "/api/reply/insertreply";
  return axios.post(url, replyData);
}

export { insertReply };
