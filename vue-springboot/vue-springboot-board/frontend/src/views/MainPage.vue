<template>
  <div>
    <div class="main list-container contents"></div>

    <router-link to="/add" class="create-button" v-if="!isLogin">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
};
</script>

<style></style>
