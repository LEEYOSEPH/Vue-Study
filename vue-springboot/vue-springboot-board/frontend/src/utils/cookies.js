function saveUserNoCookie(value) {
  document.cookie = `user_no=${value}`;
}

function saveUserNameCookie(value) {
  document.cookie = `user_name=${value}`;
}

function getUserNoFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)user_no\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getUserNameCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)user_name\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  deleteCookie,
  getUserNameCookie,
  getUserNoFromCookie,
  saveUserNameCookie,
  saveUserNoCookie,
};
