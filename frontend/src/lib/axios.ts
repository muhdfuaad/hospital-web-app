import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:7112", // update to your .NET API URL
});

// // ✅ Automatically attach JWT token
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default API;
