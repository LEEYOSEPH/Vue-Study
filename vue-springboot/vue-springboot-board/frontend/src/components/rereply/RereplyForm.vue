<template>
  <li v-if="isUserLogin">
    <form class="form" @submit.prevent="submitForm">
      <div>
        <textarea
          name=""
          id=""
          cols="5"
          rows="5"
          v-model="rereply_content"
        ></textarea>
        <button type="submit" class="btn">등록</button>
        <button type="button" class="btn" @click="close">취소</button>
      </div>
    </form>
  </li>
  <li v-else>
    <span>
      <router-link to="/login"><strong>로그인</strong></router-link> 을 하시면
      댓글을 등록 할 수 있습니다.
    </span>
  </li>
</template>

<script>
import { insertReReply } from "../../api/rereply";

export default {
  data() {
    return {
      user_no: this.$store.state.user_no,
      board_no: this.$store.state.board_no,
      reply_no: this.replyItem.reply_no,
      user_name: this.$store.state.user_name,
      rereply_content: "",
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
          user_no: this.user_no,
          board_no: this.board_no,
          reply_no: this.reply_no,
          user_name: this.user_name,
          rereply_content: this.rereply_content,
        };
        console.log(replyData);
        await insertReReply(replyData);
        this.rereply_content = "";
        this.$emit("refresh");
      } catch (error) {
        console.log(error);
      }
    },
    close() {
      this.$emit("replyForm");
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
