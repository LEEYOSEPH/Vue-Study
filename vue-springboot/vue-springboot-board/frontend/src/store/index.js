import Vue from "vue";
import Vuex from "vuex";
import { getUserNameCookie, getUserNoFromCookie } from "../utils/cookies";
import mutations from "./mutations ";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  /* 유저 상태 관리 */
  state: {
    user_no: getUserNoFromCookie() || "",
    user_name: getUserNameCookie() || "",

    /* 게시판 관린 */
    board_no: "",
  },
  getters: {
    isLogin(state) {
      return state.user_name !== "";
    },
  },
  mutations,
  actions,
});
