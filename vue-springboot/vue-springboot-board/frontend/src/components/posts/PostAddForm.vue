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
          <label for="image">Image</label>
          <input
            type="file"
            accept="image/*"
            ref="image"
            @change="onFileChanged"
          />
        </div>
        <div>
          <label for="contents">Contents </label>
          <textarea
            id="contents"
            type="text"
            rows="5"
            v-model="board_content"
          />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { createBoard } from "../../api/index";
export default {
  data() {
    return {
      board_title: "",
      board_content: "",
      board_image: "",
    };
  },
  computed: {
    isContentsValid() {
      return this.board_content.length <= 200;
    },
  },
  methods: {
    async onFileChanged() {
      this.board_image = this.$refs.image.files[0];

      var formData = new FormData();
      formData.append("img", this.board_image);

      const response = await axios.post("/api/board/uploadImage", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.img_url);
      this.board_image = response.data.img_url;
    },
    async submitForm() {
      try {
        const boardData = {
          board_title: this.board_title,
          board_content: this.board_content,
          board_image: this.board_image,
          user_no: this.$store.state.user_no,
        };
        console.log(boardData);
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
