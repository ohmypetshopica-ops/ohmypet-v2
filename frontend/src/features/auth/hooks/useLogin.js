import { useState } from 'react';
import { login as loginService } from '../services/authService'; // Importamos con alias para no confundir nombres

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async ({ email, password }) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Llamamos al servicio pasando el objeto con credenciales
      const data = await loginService({ email, password });
      
      // Guardamos el token y usuario
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      return true; // Login exitoso
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Credenciales incorrectas o error de servidor');
      return false; // Login fallido
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};