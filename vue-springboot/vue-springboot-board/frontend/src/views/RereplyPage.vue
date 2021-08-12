<template>
  <div class="contents">
    <ul>
      <h5>답글</h5>
      <rereply-list-itme
        v-for="rereplyItem in rereplyItems"
        :key="rereplyItem.rereply_no"
        :rereplyItem="rereplyItem"
        @refresh="fetchData"
      ></rereply-list-itme>
      <rereply-form
        :replyItem="replyItem"
        @replyForm="replyForm"
      ></rereply-form>
    </ul>
  </div>
</template>

<script>
import RereplyForm from "../components/rereply/RereplyForm.vue";
import RereplyListItme from "../components/rereply/RereplyListItme.vue";
import { fetchRereply } from "../api/rereply";

export default {
  components: { RereplyForm, RereplyListItme },
  data() {
    return {
      rereplyItems: [],
    };
  },
  props: {
    replyItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async fetchData() {
      try {
        const replyData = {
          reply_no: this.replyItem.reply_no,
          board_no: this.replyItem.board_no,
        };

        const { data } = await fetchRereply(replyData);
        console.log(data);
        this.rereplyItems = data;
      } catch (error) {
        console.log(error);
      }
    },
    replyForm() {
      this.$emit("replyForm");
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
