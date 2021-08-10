<template>
  <div class="contents">
    <h1 class="page-header">GE SI PAN</h1>
    <div class="form-wrapper">
      <div>
        <h3>{{ board_title }}</h3>
      </div>
      <div>
        {{ board_content }}
      </div>
      <div>{{ board_cnt }} Views | Likes</div>
      <div>
        <i class="icon ion-md-heart" @click="likes"></i>
        {{ board_updateDt | formatDate }}
      </div>
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
    /* 게시판 호출 */
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
    /* 좋아요 여부 확인 */
    likes() {
      if (this.$store.state.user_no === "") {
        alert("로그인이 필요 합니다.");
      } else {
        console.log("로그인 확인");
      }
    },
  },
  created() {
    this.fetchBoardDetail();
  },
};
</script>

<style></style>
