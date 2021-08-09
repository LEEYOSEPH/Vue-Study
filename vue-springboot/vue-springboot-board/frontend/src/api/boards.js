import axios from "axios";

/* 게시글 생성 */
function createBoard(boardData) {
  const url = "/api/board/createBoard";
  return axios.post(url, boardData);
}

/* 게시글 전체 조회 */
function fetchBoard() {
  const url = "/api/board/getBoard";
  return axios.get(url);
}

/* 게시글 상세 조회 */
function getBoardDetail(boardData) {
  const url = "/api/board/getBoardDetail";
  return axios.post(url, boardData);
}

/* 나의 게시글 전체 조회 */
function fetchMyBoard(boardData) {
  const url = "/api/board/getMyBoard";
  return axios.post(url, boardData);
}

/* 게시글 삭제 */
function deleteBoard(boardData) {
  const url = "/api/board/deleteBoard";
  return axios.post(url, boardData);
}

/* 게시글 수정페이지 */
function getBoardModify(boardData) {
  const url = "/api/board/modifyBoard";
  return axios.post(url, boardData);
}

/* 게시글 수정 */
function editBoard(boardData) {
  const url = "/api/board/editBoard";
  return axios.put(url, boardData);
}

/* 조회수 증가 */
function updateBoardCnt(boardData) {
  const url = "/api/board/updateBoardCnt";
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
  updateBoardCnt,
};
