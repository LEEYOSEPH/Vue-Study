<template>
  <div class="contents">
    <ul>
      <h3>댓글</h3>
      <li v-if="!isUserLogin">
        <form class="form" @submit.prevent="submitForm">
          <div>
            <textarea
              name=""
              id=""
              cols="5"
              rows="5"
              v-model="reply_content"
            ></textarea>
            <button type="submit" class="btn">등록</button>
          </div>
        </form>
      </li>
      <li v-else>
        <span>
          <router-link to="/login"><strong>로그인</strong></router-link> 을
          하시면 댓글을 등록 할 수 있습니다.
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { insertReply } from "../../api/reply";

export default {
  data() {
    return {
      user_name: this.$store.state.user_name,
      user_no: this.$store.state.user_no,
      board_no: this.$store.state.board_no,
      reply_content: "",
    };
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
          user_name: this.user_name,
          user_no: this.user_no,
          board_no: this.board_no,
          reply_content: this.reply_content,
        };
        console.log(replyData + "데이터 확인");
        await insertReply(replyData);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.contents {
  max-width: 1020px;
  margin: 0 auto;
  padding: 41px 5px;
  width: 100%;
}
ul {
  background: white;
  -webkit-box-shadow: 0 20px 20px rgb(0 0 0 / 8%);
  box-shadow: 0 20px 20px rgb(0 0 0 / 8%);
  border-radius: 3px;
  padding: 49px 15px;
}
h3 {
  margin-top: -46px;
}
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
