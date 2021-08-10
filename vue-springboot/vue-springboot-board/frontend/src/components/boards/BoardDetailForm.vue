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
      <div>{{ board_cnt }} Views | {{ likes_cnt }}Likes</div>
      <div>
        <i class="icon ion-md-heart" @click="likesCheck"></i>
        {{ board_updateDt | formatDate }}
      </div>
    </div>
  </div>
</template>

<script>
import { getBoardDetail } from "../../api/boards";
import { likesCheck } from "../../api/likes";

export default {
  data() {
    return {
      board_title: "",
      board_content: "",
      board_updateDt: "",
      board_cnt: "",
      user_no: "",
      board_no: this.$store.state.board_no,
      likes_cnt: "",
      likes_check: 0,
    };
  },
  computed: {
    isLikes() {
      return this.likes_check;
    },
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
        this.likes_cnt = data.likes_cnt;
      } catch (error) {
        console.log(error);
      }
    },
    /* 좋아요 추가 */
    async likesCheck() {
      if (this.$store.state.user_no === "") {
        alert("로그인이 필요 합니다.");
      } else {
        /* 좋아요 체크 */
        const likesData = {
          board_no: this.board_no,
          user_no: this.$store.state.user_no,
        };
        await likesCheck(likesData);
        this.fetchBoardDetail();
      }
    },
  },
  created() {
    this.fetchBoardDetail();
  },
};
</script>

<style scoped>
.ion-md-heart {
  color: red;
}
</style>
