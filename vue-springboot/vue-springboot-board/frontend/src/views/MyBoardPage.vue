<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">My Board List</h1>
      <app-navi></app-navi>
      <ul>
        <my-board-list-item
          v-for="boardItem in boardItems"
          :key="boardItem.board_no"
          :boardItem="boardItem"
          @refresh="fetchData"
        ></my-board-list-item>
      </ul>
      <router-link to="/add" class="create-button">
        <i class="ion-md-add"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppNavi from "../components/common/AppNavi.vue";
import { fetchMyBoard } from "../api/boards";
import MyBoardListItem from "../components/boards/MyBoardListItem.vue";

export default {
  components: { AppNavi, MyBoardListItem },
  data() {
    return {
      boardItems: [],
      user_no: this.$store.state.user_no,
    };
  },
  methods: {
    async fetchData() {
      try {
        const boardData = {
          user_no: this.user_no,
        };
        const { data } = await fetchMyBoard(boardData);
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
