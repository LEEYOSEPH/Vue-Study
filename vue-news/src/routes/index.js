import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import createListView from "../views/CreateListView.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      // path :  url 주소
      path: "/news",
      //component: url 주소로 갔을 떄 표시될 컴포넌트
      name: "news",
      component: createListView("NewsView"),
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
