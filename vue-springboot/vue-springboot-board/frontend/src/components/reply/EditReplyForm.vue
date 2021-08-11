<template>
  <li>
    <form class="form" @submit.prevent="submitForm">
      <div>
        <textarea
          name=""
          id=""
          cols="5"
          rows="5"
          v-model="reply_content"
        ></textarea>
        <button type="submit" class="btn">수정</button>
      </div>
    </form>
  </li>
</template>

<script>
import { editReply } from "../../api/reply";

export default {
  data() {
    return {
      user_no: this.$store.state.user_no,
      board_no: this.replyItem.board_no,
      reply_content: this.replyItem.reply_content,
      reply_no: this.replyItem.reply_no,
    };
  },
  props: {
    replyItem: {
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
          user_name: this.$store.state.user_name,
          user_no: this.user_no,
          board_no: this.board_no,
          reply_content: this.reply_content,
          reply_no: this.reply_no,
        };
        console.log(replyData);
        await editReply(replyData);
        this.reply_content = "";
        this.$emit("refresh");
      } catch (error) {
        console.log(error);
      }
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
  margin-left: 390px;
}
.form {
  width: auto;
  height: 100%;
}
</style>
