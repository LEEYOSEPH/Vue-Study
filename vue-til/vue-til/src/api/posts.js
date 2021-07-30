// 학습 노트 조작과 관련되 CRUD API 함수 파일
import { posts } from "./index";

// 학습노트 데이터를 조회 하는 API
function fetchPosts() {
  return posts.get("/");
}

// 학습노트 데이터를 생성 하는 API
function createPost(postData) {
  return posts.post("/", postData);
}

export { fetchPosts, createPost };
