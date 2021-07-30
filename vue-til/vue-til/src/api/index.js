import axios from "axios";
import { setInterceptors } from "./common/interceptors";

//SETUP과 관련된 내용만 담겨있음

function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// axios 초기화 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

//인증이 필요 없는 주소 처리
export const instance = createInstance();

// 토큰 인증이 필요한 주소 처리
export const posts = createInstanceWithAuth("posts");
