import axios from 'axios';
import Cookie from 'js-cookie';

// Keep track of the token in memory as a fallback
let manualCsrfToken: string | undefined = undefined;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Response Interceptor: Try to "steal" the token if the backend sends it
axiosInstance.interceptors.response.use((response) => {
  // If your backend is configured to expose headers, we can grab it here
  const tokenFromHeader = response.headers['x-xsrf-token']; 
  if (tokenFromHeader) {
    manualCsrfToken = tokenFromHeader;
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});

// Request Interceptor
axiosInstance.interceptors.request.use((config) => {
  // 1. Try to get it from the cookie (Works on Localhost)
  const cookieToken = Cookie.get('XSRF-TOKEN');
  
  // 2. Use whichever one we found
  const activeToken = cookieToken || manualCsrfToken;

  if (activeToken) {
    config.headers['X-XSRF-TOKEN'] = activeToken;
  }
  
  return config;
});

export default axiosInstance;
