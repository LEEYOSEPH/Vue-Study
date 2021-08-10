import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      /* 기본 이동 */
      path: "/",
      redirect: "/main",
    },
    {
      /* 메인 페이지 이동 */
      path: "/main",
      component: () => import("../views/MainPage.vue"),
    },
    {
      /* 로그인 페이지 이동 */
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      /* 회원가입 페이지 이동 */
      path: "/sign",
      name: "sign",
      component: () => import("../views/SignupPage.vue"),
    },
    {
      /* 게시글 작성 페이지 이동 */
      path: "/add",
      name: "add",
      component: () => import("../views/AddBoardPage.vue"),
    },
    {
      /* 게시글 상세조회 페이지 이동 */
      path: "/board/:board_no",
      component: () => import("../views/BoardDetailPage.vue"),
    },
    {
      /* 나의 게시글 페이지 이동 */
      path: "/myboard",
      component: () => import("../views/MyBoardPage.vue"),
    },
    {
      /* 게시글 수정페이지 이동 */
      path: "/board/:user_no/:board_no",
      component: () => import("../views/BoardModifyPage.vue"),
    },
    {
      /* 조회수 높은순 페이지 */
      path: "/viewed",
      component: () => import("../views/MostViewedBoardpage.vue"),
    },
    {
      /* 좋아요 많은순 페이지 */
      path: "/likes",
      component: () => import("../views/MostLikesBoardPage.vue"),
    },
    {
      /* 경로가 올바르지 않으면 오류 페이지이동 */
      path: "*",
      component: () => import("../views/NotFoundPage.vue"),
    },
  ],
});
