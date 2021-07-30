<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../../api/index";
import { validateEmail } from "../../utils/validation";

export default {
  data() {
    return {
      //from value
      username: "",
      password: "",
      nickname: "",
      // log
      logMessage: "",
    };
  },
  computed: {
    isUserNameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        //form 태그 연결 이벤트
        //이벤트 버블링
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        const { data } = await registerUser(userData);
        this.logMessage = `${data.username}님이 가입되었습니다.`;
        this.initForm();
      } catch (error) {
        this.logMessage = error.response.data;
      }
    },
    initForm() {
      (this.username = ""), (this.password = ""), (this.nickname = "");
    },
  },
};
</script>

<style></style>
