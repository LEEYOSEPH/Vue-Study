<template>
  <div class="contents">
    <h1 class="page-header">GE SI PAN</h1>
    <div class="form-wrapper">
      <div>
        <h3>{{ board_title }}</h3>
        <div>
          {{ board_content }}
        </div>
      </div>
      <div>
        `조회수 : {{ board_cnt }}`
        {{ board_updateDt | formatDate }}
      </div>
    </div>
    <div class="create-button">
      <i class="ion-md-add"></i>
    </div>
    <div class="create-button">
      <i class="icon ion-md-trash"></i>
    </div>
  </div>
</template>

<script>
import { getBoardDetail } from "../../api/boards";

export default {
  data() {
    return {
      board_title: "",
      board_content: "",
      board_updateDt: "",
      board_cnt: "",
      user_no: "",
      board_no: this.$store.state.board_no,
    };
  },
  methods: {
    async fetchBoardDetail() {
      const boardData = {
        board_no: this.board_no,
      };
      try {
        const { data } = await getBoardDetail(boardData);
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
    this.fetchBoardDetail();
  },
};
</script>

<style></style>
