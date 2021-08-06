<template>
  <div>elxpdlf</div>
</template>

<script>
import { getBoardDetail } from "../../api/boards";

export default {
  data() {
    return {
      board_no: this.$store.state.board_no,
    };
  },
  methods: {
    async fetchBoardDetail() {
      const boardData = {
        board_no: this.board_no,
      };
      console.log("보드 넘버 확인" + boardData);
      try {
        const { data } = await getBoardDetail(boardData);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchBoardDetail();
  },
};
</script>

<style></style>
