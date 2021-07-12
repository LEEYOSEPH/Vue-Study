import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store/store";

createApp(App).mount("#app", store);
