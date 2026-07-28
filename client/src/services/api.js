import axios from "axios";

const api = axios.create({
  baseURL: "https://login-system-nhd9.onrender.com"
});

export default api;