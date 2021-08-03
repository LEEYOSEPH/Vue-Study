function saveUserNoCookie(value) {
  document.cookie = `user_no=${value}`;
}

function saveUserIdCookie(value) {
  document.cookie = `user_id=${value}`;
}

function getUserNoFromCookie() {
  return document.replace();
}

function getUserIdCookie() {
  return document.replace();
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  deleteCookie,
  getUserIdCookie,
  getUserNoFromCookie,
  saveUserIdCookie,
  saveUserNoCookie,
};
