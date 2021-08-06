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
import { createBoard } from "../../api/boards";
import { imgUpload } from "../../api/images";
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
    /* 파일 업로드 메소드
      외부에 저장 된 뒤 저장 주소 String반환
    */
    async onFileChanged() {
      this.board_image = this.$refs.image.files[0];

      var formData = new FormData();
      formData.append("img", this.board_image);

      const { data } = await imgUpload(formData);
      this.board_image = data.img_url;
    },
    /* 게시글 등록 메소드 */
    async submitForm() {
      try {
        const boardData = {
          board_title: this.board_title,
          board_content: this.board_content,
          board_image: this.board_image,
          user_no: this.$store.state.user_no,
        };
        const { data } = await createBoard(boardData);
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
