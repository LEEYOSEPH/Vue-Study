<template>
  <li>
    <form class="form" @submit.prevent="submitForm">
      <div>
        <textarea
          name=""
          id=""
          cols="5"
          rows="5"
          v-model="rereply_content"
        ></textarea>
        <button type="submit" class="btn">수정</button>
        <button type="button" class="btn" @click="close">취소</button>
      </div>
    </form>
    <hr />
  </li>
</template>

<script>
import { editRereply } from "../../api/rereply";

export default {
  data() {
    return {
      user_no: this.$store.state.user_no,
      board_no: this.rereplyItem.board_no,
      rereply_content: this.rereplyItem.rereply_content,
      rereply_no: this.rereplyItem.rereply_no,
      reply_no: this.rereplyItem.reply_no,
    };
  },
  props: {
    rereplyItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    async submitForm() {
      try {
        const replyData = {
          user_no: this.user_no,
          board_no: this.board_no,
          rereply_content: this.rereply_content,
          rereply_no: this.rereply_no,
          reply_no: this.reply_no,
        };
        console.log(replyData);
        await editRereply(replyData);
        this.rereply_content = "";
        this.$emit("refresh");
      } catch (error) {
        console.log(error);
      }
    },
    close() {
      this.$emit("refresh");
    },
  },
};
</script>

<style scoped>
.btn {
  background: #fe9616;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  border: 0 solid #dae1e7;
  color: white;
}
.form {
  width: auto;
  height: 100%;
}
</style>
