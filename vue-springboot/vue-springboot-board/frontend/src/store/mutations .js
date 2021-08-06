export default {
  /* 유저고유번호 저장 */
  setUserNo(state, user_no) {
    state.user_no = user_no;
  },
  /* 유저 고유번호 삭제 */
  clearUserNo(state) {
    state.user_no = "";
  },

  /* 유저명 저장 */
  setUserName(state, user_name) {
    state.user_name = user_name;
  },

  /* 유저명 삭제 */
  clearUserName(state) {
    state.user_name = "";
  },

  /* 게시판 번호 */
  getBoardNo(state, board_no) {
    state.board_no = board_no;
  },
};
