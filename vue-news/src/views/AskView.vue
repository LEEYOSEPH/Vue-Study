<template>
  <div>
    <div v-for="item in ask">{{ item }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";
export default {
  data() {
    return {
      item: [],
    };
  },
  created() {
    fetchAskList();
  },
};
</script>

<style></style>
