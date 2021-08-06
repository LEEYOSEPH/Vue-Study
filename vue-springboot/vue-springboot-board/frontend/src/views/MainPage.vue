<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">GE SI PAN</h1>
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
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import BoardListItem from "../components/boards/BoardListItem.vue";
import { fetchBoard } from "../api/boards";

export default {
  components: { BoardListItem },
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
      console.log(data);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
