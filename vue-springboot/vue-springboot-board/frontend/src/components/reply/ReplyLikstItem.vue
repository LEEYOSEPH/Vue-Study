<template>
  <li>
    <hr />
    <div>
      <span>{{ replyItem.user_name }}</span>
      {{ replyItem.reply_updatedt | formatDate }}
      <a @click="isRereplyCheck">답글</a>
    </div>
    <div>{{ replyItem.reply_content }}</div>
    <div v-if="isLogin">
      <i class="icon ion-md-create" @click="editPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
      <edit-reply-form
        v-if="isEdit"
        :replyItem="replyItem"
        @refresh="refresh"
      ></edit-reply-form>
    </div>
    <rereply-page v-if="isRereply"></rereply-page>
  </li>
</template>

<script>
import { deleteReply } from "../../api/reply";
import RereplyPage from "../../views/RereplyPage.vue";
import EditReplyForm from "./EditReplyForm.vue";

export default {
  components: { EditReplyForm, RereplyPage },
  data() {
    return {
      user_no: this.replyItem.user_no,
      edit_check: false,
      rereply_check: false,
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
    isRereply() {
      return this.rereply_check;
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
      if (!this.edit_check) {
        this.edit_check = true;
      } else {
        this.edit_check = false;
      }
    },
    refresh() {
      this.edit_check = false;
    },
    isRereplyCheck() {
      if (!this.rereply_check) {
        this.rereply_check = true;
      } else {
        this.rereply_check = false;
      }
    },
  },
};
</script>

<style></style>
