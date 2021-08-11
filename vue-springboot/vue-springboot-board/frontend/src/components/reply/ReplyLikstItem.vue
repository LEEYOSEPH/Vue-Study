<template>
  <li>
    <div>
      <span>{{ replyItem.user_name }}</span>
      {{ replyItem.reply_updatedt | formatDate }}
    </div>
    <div>{{ replyItem.reply_content }}</div>
    <div v-if="isLogin">
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      user_no: this.replyItem.user_no,
    };
  },
  props: {
    replyItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isLogin() {
      return this.user_no == this.$store.state.user_no;
    },
  },
};
</script>

<style></style>
