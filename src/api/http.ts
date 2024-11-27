import axios from "axios";

const TOKEN = localStorage.getItem("access_token");

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    Authorization: `Bearer ${TOKEN}` || "",
  },
});
http.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (err: any) {
    if (err.message === "Network Error") {
      alert("Network Error");
    }
    if (
      err.response.data.statusCode === 401 &&
      err.response.config.method === "get"
    ) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);