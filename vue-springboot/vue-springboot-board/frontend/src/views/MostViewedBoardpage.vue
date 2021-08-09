<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">GE SI PAN</h1>
      <app-navi></app-navi>
      <ul>
        <board-list-item
          v-for="boardItem in boardItems"
          :key="boardItem.board_no"
          :boardItem="boardItem"
          @refresh="fetchData"
        ></board-list-item>
      </ul>
    </div>
    <router-link to="/add" class="create-button" v-if="isLogin">
      <i class="icon ion-md-create"></i>
    </router-link>
  </div>
</template>

<script>
import BoardListItem from "../components/boards/BoardListItem.vue";
import { fetchMostViewedBoard } from "../api/boards";
import AppNavi from "../components/common/AppNavi.vue";

export default {
  components: { BoardListItem, AppNavi },
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
      try {
        const { data } = await fetchMostViewedBoard();
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
