<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from "../api/index";
export default {
  methods: {
    async fetchData() {
      const response = await fetchPosts();
      console.log(response);
    },
  },
  //페이지에 진입하자 마자 호출 할 수 있다.
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
