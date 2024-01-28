import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://backend-1-w90w.onrender.com"
})

export default axiosClient;