<template>
  <li>
    <hr />
    <div>
      <span>{{ replyItem.user_name }}</span>
      {{ replyItem.reply_updatedt | formatDate }}
    </div>
    <div>{{ replyItem.reply_content }}</div>
    <div v-if="isLogin">
      <i class="icon ion-md-create" @click="editPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
      <edit-reply-form
        v-if="isEdit === 1"
        :replyItem="replyItem"
        @refresh="refresh"
      ></edit-reply-form>
    </div>
  </li>
</template>

<script>
import { deleteReply } from "../../api/reply";
import EditReplyForm from "./EditReplyForm.vue";

export default {
  components: { EditReplyForm },
  data() {
    return {
      user_no: this.replyItem.user_no,
      edit_check: "",
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
    isEdit() {
      return this.edit_check;
    },
  },
  methods: {
    async deleteItem() {
      if (confirm("삭제 하시겠습니까?")) {
        try {
          const replyData = {
            user_no: this.$store.state.user_no,
            reply_no: this.replyItem.reply_no,
            board_no: this.replyItem.board_no,
          };
          await deleteReply(replyData);
          this.$emit("refresh");
        } catch (error) {
          console.log(error);
        }
      }
    },
    editPage() {
      this.edit_check = 1;
    },
    refresh() {
      this.edit_check = "";
      this.$emit("refresh");
    },
  },
};
</script>

<style></style>
