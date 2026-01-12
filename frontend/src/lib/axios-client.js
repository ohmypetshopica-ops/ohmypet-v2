import axios from 'axios';

const axiosClient = axios.create({
  // IMPORTANTE:
  // 1. Usamos tu IP de DigitalOcean (138.68.25.226) en lugar de localhost.
  // 2. Quitamos el "/api/v1" porque tu backend no lo usa.
  baseURL: import.meta.env.VITE_API_URL || 'http://138.68.25.226:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;