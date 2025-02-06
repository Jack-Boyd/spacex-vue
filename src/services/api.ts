import axios from 'axios';

// Create an Axios instance with base config
const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v4',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Timeout for API requests
});

// Interceptors for logging and error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
