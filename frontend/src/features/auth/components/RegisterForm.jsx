import { useState } from "react";
// CORRECCIÓN AQUÍ TAMBIÉN: Usar llaves { }
import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { register } from "../services/authService";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name_paternal: "",
    last_name_maternal: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await register(formData);
      alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
      window.location.reload(); 
    } catch (err) {
      console.error(err);
      setError("Error al registrarse. Verifica tus datos o intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-8 py-2 animate-fade-in-up">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Crear Cuenta</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
          {error}
        </div>
      )}

      <Input
        label="Nombres"
        name="first_name"
        placeholder="Ej. Juan Carlos"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      
      <div className="flex gap-2">
        <Input
          label="Ap. Paterno"
          name="last_name_paternal"
          placeholder="Pérez"
          value={formData.last_name_paternal}
          onChange={handleChange}
          required
        />
        <Input
          label="Ap. Materno"
          name="last_name_maternal"
          placeholder="López"
          value={formData.last_name_maternal}
          onChange={handleChange}
          required
        />
      </div>

      <Input
        label="Correo Electrónico"
        name="email"
        type="email"
        placeholder="tu@correo.com"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Contraseña"
        name="password"
        type="password"
        placeholder="******"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Button type="submit" isLoading={loading} className="mt-2">
        Registrarse
      </Button>
    </form>
  );
}