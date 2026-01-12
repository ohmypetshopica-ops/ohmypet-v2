import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
// CORRECCIÓN AQUÍ: Agregamos llaves { } porque son exportaciones nombradas
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
// Asegúrate de tener instalada esta librería, si no, borra esta línea y los iconos
import { Mail, Lock } from 'lucide-react'; 

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar que los campos no estén vacíos antes de enviar
    if (!formData.email || !formData.password) return;

    try {
      const success = await login({ email: formData.email, password: formData.password });
      if (success) {
        navigate('/dashboard'); 
      }
    } catch (err) {
       console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up delay-200">
      <div className="mb-8 text-center lg:text-left">
         <h2 className="text-2xl font-bold text-gray-900">¡Hola de nuevo! 👋</h2>
         <p className="text-gray-500 mt-2 text-sm">Ingresa tus credenciales para acceder al panel.</p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-lg animate-pulse">
          ⚠️ {error}
        </div>
      )}

      <div className="space-y-5">
        <div className="relative group">
          {/* Si no tienes lucide-react instalado, borra la etiqueta <Mail /> */}
          <Mail className="absolute left-4 top-[38px] text-gray-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
          <Input 
            label="Correo Electrónico" 
            type="email" 
            name="email"
            placeholder="ejemplo@ohmypet.com"
            className="pl-12"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div className="relative group">
          {/* Si no tienes lucide-react instalado, borra la etiqueta <Lock /> */}
          <Lock className="absolute left-4 top-[38px] text-gray-400 w-5 h-5 transition-colors group-focus-within:text-primary" />
          <Input 
            label="Contraseña" 
            type="password" 
            name="password"
            placeholder="••••••••"
            className="pl-12"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary mr-2" />
            Recuérdame
        </label>
        <a href="#" className="text-sm text-primary hover:text-primary-hover font-semibold hover:underline transition-all">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <Button type="submit" isLoading={loading} className="text-lg">
        Iniciar Sesión
      </Button>
    </form>
  );
};