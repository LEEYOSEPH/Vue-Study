function saveUserNoCookie(value) {
  document.cookie = `user_no=${value}`;
}

function saveUserIdCookie(value) {
  document.cookie = `user_id=${value}`;
}

function getUserNoFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)user_no\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getUserIdCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)user_id\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
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
