import { useState } from 'react';
import { loginUser } from '../services/authService';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await loginUser(email, password);
      // Guardamos el token y usuario (en una app real usaríamos Context aquí)
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      return data.user;
    } catch (err) {
      setError(err.message || 'Credenciales incorrectas');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};