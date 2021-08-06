<template>
  <li v-on:click="getBoardDetail">
    <div class="board-title">
      {{ boardItem.board_title }}
    </div>
    <div class="board-contents">
      {{ boardItem.board_content }}
    </div>
    <div class="board-time">
      {{ boardItem.board_updateDt | formatDate }}
    </div>
  </li>
</template>

<script>
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
  },
};
</script>

<style></style>
