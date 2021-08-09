<template>
  <div class="contents">
    <h1 class="page-header">GE SI PAN</h1>
    <div class="form-wrapper">
      <form class="form">
        <div>
          <label for="title">Title </label>
          <input id="title" type="text" v-model="board_title" />
        </div>
        <div>
          <label for="contents">Contents </label>
          <textarea
            id="contents"
            type="text"
            rows="5"
            v-model="board_content"
          />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { getBoardModify } from "../../api/boards";

export default {
  data() {
    return {
      board_title: "",
      board_content: "",
      board_updateDt: "",
      board_cnt: "",
      user_no: "",
      board_no: "",
    };
  },
  methods: {
    async getBoardModify() {
      const boardData = {
        board_no: this.$store.state.board_no,
        user_no: this.$store.state.user_no,
      };
      try {
        const { data } = await getBoardModify(boardData);
        this.board_title = data.board_title;
        this.board_content = data.board_content;
        this.board_updateDt = data.board_updateDt;
        this.board_cnt = data.board_cnt;
        this.user_no = data.user_no;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getBoardModify();
  },
};
</script>

<style></style>
