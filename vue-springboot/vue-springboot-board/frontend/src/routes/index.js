import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/sign",
      name: "sign",
      component: () => import("../views/SignupPage.vue"),
    },
    {
      path: "*",
      component: () => import("../views/NotFoundPage.vue"),
    },
  ],
});
