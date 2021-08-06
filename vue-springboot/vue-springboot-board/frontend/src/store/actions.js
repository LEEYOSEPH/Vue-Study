import { saveUserNoCookie, saveUserNameCookie } from "../utils/cookies";
import { loginUser } from "../api/index";

export default {
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
};
