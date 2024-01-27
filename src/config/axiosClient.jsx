import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://backend-kh4q.onrender.com"
})

export default axiosClient;