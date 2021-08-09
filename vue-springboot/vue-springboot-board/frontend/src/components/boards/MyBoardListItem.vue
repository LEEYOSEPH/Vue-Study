<template>
  <li>
    <div class="board-title">
      {{ boardItem.board_title }}
    </div>
    <div class="board-contents" v-on:click="getBoardDetail">
      {{ boardItem.board_content }}
    </div>
    <div class="board-time">
      {{ boardItem.board_updateDt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deleteBoard } from "../../api/boards";

export default {
  props: {
    boardItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getBoardDetail() {
      const board_no = this.boardItem.board_no;
      this.$store.commit("getBoardNo", board_no);
      this.$router.push(`/board/${board_no}`);
    },
    routeEditPage() {
      const board_no = this.boardItem.board_no;
      const user_no = this.boardItem.user_no;
      this.$store.commit("getBoardNo", board_no);
      this.$router.push(`/board/${user_no}/${board_no}`);
    },
    async deleteItem() {
      if (confirm("삭제 하시겠습니까?")) {
        const boardData = {
          board_no: this.boardItem.board_no,
          user_no: this.boardItem.user_no,
        };
        await deleteBoard(boardData);
        this.$emit("refresh");
      }
    },
  },
};
</script>

<style></style>
