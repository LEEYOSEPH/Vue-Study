import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./routes/index";
import { formatDate } from "./utils/filters";
Vue.config.productionTip = false;
Vue.filter("formatDate", formatDate);
new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
