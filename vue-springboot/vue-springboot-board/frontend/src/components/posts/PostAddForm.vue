<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <toast-editor></toast-editor>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import ToastEditor from '../utils/ToastEditor.vue';

export default {
  components: { ToastEditor },
  
};
</script>

<style scoped>
.form {
  width: 100%;
  height: 100%;
}
