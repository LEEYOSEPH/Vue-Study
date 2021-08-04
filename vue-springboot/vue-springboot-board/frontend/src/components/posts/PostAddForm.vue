<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title </label>
          <input id="title" type="text" v-model="board_title" />
        </div>
        <div>
          <editor
            :value="editorText"
            :options="editorOptions"
            previewStyle="tab"
            mode="wysiwyg"
            ref="toastuiEditor"
          />
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
import "codemirror/lib/codemirror.css";
import { createBoard } from "../../api/index";
export default {
  components: {
    Editor,
  },
  data() {
    return {
      board_title: "",
      editorText: "",
      editorOptions: {
        hideModeSwitch: true,
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const boardData = {
          board_title: this.board_title,
          board_content: this.$refs.toastuiEditor.invoke("getHtml"),
          user_no: this.$store.state.user_no,
        };
        const { data } = await createBoard(boardData);
        console.log(data);
        this.$router.push("/main");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
