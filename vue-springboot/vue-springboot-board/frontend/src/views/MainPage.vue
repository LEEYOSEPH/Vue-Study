<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">GE SI PAN</h1>
      <ul>
        <post-list-item
          v-for="boardItem in boardItems"
          :key="boardItem.board_no"
          :postItem="postItem"
          @refresh="fetchData"
        ></post-list-item>
      </ul>
    </div>
    <router-link to="/add" class="create-button" v-if="isLogin">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import PostListItem from "../components/posts/PostListItem.vue";
import { fetchBoard } from "../api/boards";

export default {
  components: { PostListItem },
  data() {
    return {
      boardItems: [],
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    async fetchData() {
      const { data } = await fetchBoard();
      this.boardItems = data;
      console.log(this.boardItems);
      console.log(data.board_no);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
