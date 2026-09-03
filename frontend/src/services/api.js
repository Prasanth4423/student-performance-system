import axios from "axios";

const api = axios.create({
    baseURL: "https://student-performance-system-bs2r.onrender.com/api/",
});

export default api;