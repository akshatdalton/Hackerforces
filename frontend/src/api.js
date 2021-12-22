import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 2000,
    headers: { "x-auth-token": token },
});

export default api;
