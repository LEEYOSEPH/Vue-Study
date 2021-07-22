import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/lgoin",
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/sign",
      component: () => import("@/views/SignupPage.vue"),
    },
    {
      path: "*",
      component: () => import("@/views/NotFoundPage.vue"),
    },
  ],
});
