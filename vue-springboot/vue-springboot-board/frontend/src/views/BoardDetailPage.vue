<template>
  <div>
    <board-detail-form></board-detail-form>
    <reply-page></reply-page>
  </div>
</template>

<script>
import BoardDetailForm from "../components/boards/BoardDetailForm.vue";
import ReplyPage from "./ReplyPage.vue";
export default {
  components: { BoardDetailForm, ReplyPage },
};
</script>

<style></style>
