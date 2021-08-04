<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="user_id" />
          <p class="validation-text">
            <span class="warning" v-if="!isUserNameValidate && user_id">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="user_pw" />
        </div>
        <button
          :disabled="!isUserNameValidate || !user_pw"
          type="submit"
          class="btn"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from "../../utils/validation";
export default {
  data() {
    return {
      //form value
      user_id: "",
      user_pw: "",
      //log
      logMessage: "",
    };
  },
  computed: {
    isUserNameValidate() {
      return validateEmail(this.user_id);
    },
  },
  methods: {
    async submitForm() {
      try {
        //비즈니스 로직
        const userData = {
          user_id: this.user_id,
          user_pw: this.user_pw,
        };
        await this.$store.dispatch("LOGIN", userData);
        this.$router.push("/main");
      } catch (error) {
        // 에러 핸들링할 코드
        // eslint-disable-next-line no-console
        console.log(error.response.data);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      (this.user_id = ""), (this.user_pw = "");
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
