import axiosClient from '../../../lib/axios-client';

// Función para INICIAR SESIÓN
export const login = async ({ email, password }) => {
  // Ahora sí llamamos al backend real en Python
  const { data } = await axiosClient.post('/auth/login', { email, password });
  return data; 
};

// Función para REGISTRARSE (¡Esta es la que te faltaba o fallaba!)
export const register = async (userData) => {
  // userData contiene: email, password, first_name, last_name_paternal, etc.
  const { data } = await axiosClient.post('/auth/register', userData);
  return data;
};

// Función para obtener datos del usuario actual (útil para recargar página)
export const getCurrentUser = async () => {
  const { data } = await axiosClient.get('/auth/me'); // Asegúrate de implementar esto en Python después si lo usas
  return data;
};