<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <post-list-item
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
        ></post-list-item>
        <!-- <li v-for="postItem in postItems" :key="postItem._id">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-contents">
            {{ postItem.contents }}
          </div>
          <div class="post-time">
            {{ postItem.createdAt }}
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from "../components/posts/PostListItem.vue";
import { fetchPosts } from "../api/index";
export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPosts();
      console.log(data.posts);
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
