<template>
  <div class="contents">
    <ul>
      <h3>댓글</h3>
      <hr />
      <reply-likst-item
        v-for="replyItem in replyItems"
        :key="replyItem.reply_no"
        :replyItem="replyItem"
        @refresch="fetchData"
      ></reply-likst-item>
      <hr />
      <reply-form></reply-form>
    </ul>
  </div>
</template>

<script>
import ReplyForm from "../components/reply/ReplyForm.vue";
import ReplyLikstItem from "../components/reply/ReplyLikstItem.vue";
import { fetchReply } from "../api/reply";

export default {
  components: { ReplyForm, ReplyLikstItem },
  data() {
    return {
      replyItems: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const replyData = {
          board_no: this.$store.state.board_no,
        };

        const { data } = await fetchReply(replyData);
        console.log(data);
        this.replyItems = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchData();
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
</style>
