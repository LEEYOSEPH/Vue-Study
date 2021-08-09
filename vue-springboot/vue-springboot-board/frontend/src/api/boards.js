import axios from "axios";

function createBoard(boardData) {
  const url = "/api/board/createBoard";
  return axios.post(url, boardData);
}

function fetchBoard() {
  const url = "/api/board/getBoard";
  return axios.get(url);
}

function getBoardDetail(boardData) {
  const url = "/api/board/getBoardDetail";
  return axios.post(url, boardData);
}

function fetchMyBoard(boardData) {
  const url = "/api/board/getMyBoard";
  return axios.post(url, boardData);
}

function deleteBoard(boardData) {
  const url = "/api/board/deleteBoard";
  return axios.post(url, boardData);
}

function getBoardModify(boardData) {
  const url = "/api/board/modifyBoard";
  return axios.post(url, boardData);
}

function editBoard(boardData) {
  const url = "/api/board/editBoard";
  return axios.put(url, boardData);
}

export {
  createBoard,
  fetchBoard,
  getBoardDetail,
  fetchMyBoard,
  deleteBoard,
  getBoardModify,
  editBoard,
};