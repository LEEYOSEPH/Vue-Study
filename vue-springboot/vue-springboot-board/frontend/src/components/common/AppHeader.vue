<template>
  <header>
    <div>
      <router-link to="/" class="logo">
        GE-SI-PAN
        <span v-if="isUserLogin">{{ $store.state.user_name }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          Logout
        </a>
      </template>
      <template v-else>
        <router-link to="/login">로그인</router-link> |
        <router-link to="/sign">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "../../utils/cookies";
export default {
  /* 화면 데이터 표현을 변경 시키기 위해서 */
  computed: {
    isUserLogin() {
      // eslint-disable-next-line no-console
      console.log(this.$store.getters.isLogin);
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit("clearUserNo");
      this.$store.commit("clearUserName");
      deleteCookie("user_no");
      deleteCookie("user_name");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
