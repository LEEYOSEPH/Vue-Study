import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import SignupPage from "../components/SignupPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/sign",
      name: "sign",
      component: SignupPage,
    },
  ],
});
