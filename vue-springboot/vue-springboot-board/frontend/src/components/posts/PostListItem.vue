<template>
  <li>
    <div class="post-title">
      {{ postItem.board_title }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
