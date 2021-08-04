<template> </template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

export default {
  data() {
    return {
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: false,
        toolbarItems: [
          "heading",
          "bold",
          "italic",
          "strike",
          "divider",
          "hr",
          "quote",
          "divider",
          "ul",
          "ol",
          "divider",
          "image",
          "link",
        ],
      },
    };
  },
};
</script>

<style></style>
