<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="user_id" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="user_pw" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="user_name" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../api/index";

export default {
  data() {
    return {
      //from value
      user_id: "",
      user_pw: "",
      user_name: "",
      // log
      logMessage: "",
    };
  },
  methods: {
    async submitForm() {
      //form 태그 연결 이벤트
      //이벤트 버블링
      const userData = {
        user_id: this.user_id,
        user_pw: this.user_pw,
        user_name: this.user_name,
      };
      const { data } = await registerUser(userData);
      this.logMessage = `${data.username}님이 가입되었습니다.`;
      this.initForm();
      this.$router.push("/main");
    },
    initForm() {
      (this.user_id = ""), (this.user_pw = ""), (this.user_name = "");
    },
  },
};
</script>

<style></style>
