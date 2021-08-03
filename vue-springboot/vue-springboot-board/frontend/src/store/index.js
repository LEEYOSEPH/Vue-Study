/* eslint-disable no-console */
import Vue from "vue";
import Vuex from "vuex";
import {
  getUserIdCookie,
  getUserNoFromCookie,
  saveUserIdCookie,
  saveUserNoCookie,
} from "../utils/cookies";
import { loginUser } from "../api/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_no: getUserNoFromCookie() || "",
    user_id: getUserIdCookie() || "",
  },
  mutations: {
    setUserNo(state, user_no) {
      state.user_no = user_no;
    },
    clearUserNo(state) {
      state.user_no = "";
    },
    setUserId(state, user_id) {
      state.user_id = user_id;
    },
    clearUserId(state) {
      state.user_id = "";
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.user_no);
      commit("setUserNo", data.user_no);
      commit("setUserId", data.user_id);
      saveUserNoCookie(data.user_no);
      saveUserIdCookie(data.user_id);
      return data;
    },
  },
});
