/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
import {
  getUserNameCookie,
  getUserNoFromCookie,
  saveUserNoCookie,
  saveUserNameCookie,
} from "../utils/cookies";
import { loginUser } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  /* 유저 상태 관리 */
  state: {
    user_no: getUserNoFromCookie() || "",
    user_name: getUserNameCookie() || "",
  },
  getters: {
    isLogin(state) {
      return state.user_name !== "";
    },
  },
  mutations: {
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
  },
  actions: {
    /* LoginForm.vue 에서 오는 데이터를 받아서 
      api 폴더의 loginUser를 실행 한다.
    */
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.user_name + "LGOIN함수에서 확인");
      commit("setUserNo", data.user_no);
      commit("setUserName", data.user_name);
      saveUserNoCookie(data.user_no);
      saveUserNameCookie(data.user_name);
      return data;
    },
  },
});
