import axios from "axios";
// import dotenv from 'dotenv';
// dotenv.config();

const axiosInstance = axios.create({
    // baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    baseURL: 'http://localhost:3000/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default axiosInstance;