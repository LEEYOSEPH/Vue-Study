<template>
  <li>
    <div class="board-title">
      {{ boardItem.board_title }}
    </div>
    <div class="board-contents">
      {{ boardItem.board_content }}
    </div>
    <div class="board-time">
      {{ boardItem.updateDt }}
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
};
</script>

<style></style>
