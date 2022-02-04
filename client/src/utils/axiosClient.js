import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API
})

export default axiosClient