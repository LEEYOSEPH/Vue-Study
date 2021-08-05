import axios from "axios";

function imgUpload(formData) {
  const url = "/api/image/upload";
  return axios.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}

export { imgUpload };
