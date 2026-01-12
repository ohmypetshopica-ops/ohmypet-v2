import axiosClient from '../../../lib/axios-client';

export const loginUser = async (email, password) => {
  // Cuando tengas el backend Python listo, esta ruta será real.
  // Por ahora, si falla la conexión, simularemos un éxito para que veas la UI funcionar.
  try {
    const response = await axiosClient.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.warn("Backend no conectado. Simulando login exitoso para desarrollo...");
    // TODO: Borrar este mock cuando el backend Python esté listo
    if (email === "demo@ohmypet.com" && password === "123456") {
      return { 
        user: { id: 1, name: "Admin Demo", email, role: "admin" },
        access_token: "fake-jwt-token" 
      };
    }
    throw error.response?.data || { message: 'Error de conexión' };
  }
};