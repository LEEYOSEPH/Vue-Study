<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Most Likes Board List</h1>
      <app-navi></app-navi>
      <ul>
        <most-likes-list-item
          v-for="boardItem in boardItems"
          :key="boardItem.board_no"
          :boardItem="boardItem"
          @refresh="fetchData"
        ></most-likes-list-item>
      </ul>
      <router-link to="/add" class="create-button">
        <i class="ion-md-add"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import MostLikesListItem from "../components/boards/MostLikesListItem.vue";
import AppNavi from "../components/common/AppNavi.vue";
import { fetchMostLikesBoard } from "../api/boards";
export default {
  components: { MostLikesListItem, AppNavi },
  data() {
    return {
      boardItems: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await fetchMostLikesBoard();
        console.log(data);
        this.boardItems = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
