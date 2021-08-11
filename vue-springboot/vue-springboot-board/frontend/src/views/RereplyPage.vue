<template>
  <div class="contents">
    <ul>
      <h5>답글</h5>
      <hr />
      <rereply-form></rereply-form>
    </ul>
  </div>
</template>

<script>
import RereplyForm from "../components/rereply/RereplyForm.vue";

export default {
  components: { RereplyForm },
  data() {
    return {
      replyItems: [],
    };
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
