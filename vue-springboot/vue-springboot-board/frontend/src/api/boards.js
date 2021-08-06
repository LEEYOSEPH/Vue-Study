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

export { createBoard, fetchBoard, getBoardDetail };
