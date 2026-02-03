import axios from "axios";

const api = axios.create({
  baseURL: "https://e-commerce-backend-vslq.onrender.com",
  withCredentials: true
});

export default api;
