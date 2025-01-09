import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.STRAPI_API_URL || "http://localhost:1337",
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem("access_token");

  if (accessToken) {
    const token = `Bearer ${process.env.STRAPI_API_TOKEN} `;
    config.headers.Authorization = token;
  }
  return config;
});

// axiosClient.interceptors.response.use((response) => {
//   if (response && response.data) {
//     return response.data;
//   }
//   return response;
// }, (error) => {
//   switch (error?.response?.status) {
//     case 401:
//       localStorage.removeItem('access_token');
//       localStorage.removeItem('user');
//       window.location.href = '/dashboard/app'
//       break;
//     case 403:
//       window.location.href = '/dashboard/app'
//       break;
//     case 500:
//       // TODO
//       console.error(error)
//       throw error;
//     case 502:
//       // TODO
//       console.error(error)
//       throw error;
//     case 503:
//       // TODO
//       console.error(error)
//       throw error;
//     default:
//       throw error;
//   }
// });
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
