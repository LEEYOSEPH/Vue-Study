<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <loding-spinner v-if="isLoding"></loding-spinner>
      <ul v-else>
        <post-list-item
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></post-list-item>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import PostListItem from "../components/posts/PostListItem.vue";
import LodingSpinner from "../components/common/LoadingSpinner.vue";
import { fetchPosts } from "../api/posts";
export default {
  components: {
    PostListItem,
    LodingSpinner,
  },
  data() {
    return {
      postItems: [],
      isLoding: false,
    };
  },
  methods: {
    async fetchData() {
      this.isLoding = true;
      const { data } = await fetchPosts();
      this.isLoding = false;
      this.postItems = data.posts;
    },
  },
  //페이지에 진입하자 마자 호출 할 수 있다.
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
