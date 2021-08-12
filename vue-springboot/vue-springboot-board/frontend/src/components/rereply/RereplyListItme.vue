<template>
  <li>
    <hr />
    <div>
      <span>{{ rereplyItem.user_name }}</span>
      {{ rereplyItem.rereply_updatedt | formatDate }}
    </div>
    <div>{{ rereplyItem.rereply_content }}</div>
    <div v-if="isLogin">
      <i class="icon ion-md-create" @click="editPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
      <edit-rereply-form
        v-if="isEdit"
        :rereplyItem="rereplyItem"
        @refresh="refresh"
      ></edit-rereply-form>
    </div>
  </li>
</template>

<script>
import EditRereplyForm from "./EditRereplyForm.vue";
import { deleteRereply } from "../../api/rereply";

export default {
  components: {
    EditRereplyForm,
  },
  data() {
    return {
      user_no: this.rereplyItem.user_no,
      edit_check: false,
    };
  },
  props: {
    rereplyItem: {
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
            reply_no: this.rereplyItem.reply_no,
            board_no: this.rereplyItem.board_no,
            rereply_no: this.rereplyItem.rereply_no,
          };
          await deleteRereply(replyData);
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
      this.editPage();
      this.$emit("refresh");
    },
  },
};
</script>

<style></style>
