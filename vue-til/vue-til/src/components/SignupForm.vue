<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw:</label>
      <input id="password" type="text" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname</label>
      <input id="nickname" type="text" v-model="nickname" />
    </div>
    <div>
      <button type="submit">회원 가입</button>
    </div>
  </form>
</template>

<script>
import { registerUser } from "../api/index";

export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    async submitForm() {
      //form 태그 연결 이벤트
      //이벤트 버블링
      console.log("폼제출");
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      const response = await registerUser(userData);
      console.log(response);
    },
  },
};
</script>

<style></style>
