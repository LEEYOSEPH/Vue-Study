<template>
  <div>
    <router-link to="/">Current |</router-link>
    <router-link to="/viewed"> Most Viewed |</router-link>
    <router-link to="/likes"> Most Likes </router-link>
    <router-link to="/myboard" v-if="isLogin"> | My Board </router-link>
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
