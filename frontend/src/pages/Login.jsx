import { useState } from "react";
import { LoginForm } from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm"; 
import loginBg from "../assets/login-bg.jpg";

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    // --- CONTENEDOR PRINCIPAL ---
    <div className="relative h-screen w-full bg-[#f0f4f3] overflow-hidden flex items-center justify-center">
      
      {/* Elementos decorativos de fondo (luces sutiles detrás) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="relative w-full h-full shadow-2xl overflow-hidden flex z-10">
        
        {/* --- SECCIÓN IZQUIERDA (LOGIN FORM) --- */}
        <div 
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isSignUp ? "translate-x-full opacity-0 z-0 scale-95" : "opacity-100 z-20 scale-100"
          }`}
        >
          {/* TARJETA LOGIN */}
          <div className="w-full max-w-[450px] p-12 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 relative overflow-hidden transition-all duration-500">
             <LoginForm />
          </div>
        </div>

        {/* --- SECCIÓN DERECHA (REGISTER FORM) --- */}
        <div 
          className={`absolute top-0 left-0 h-full w-1/2 flex flex-col justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
            isSignUp ? "translate-x-full opacity-100 z-20 scale-100" : "opacity-0 z-0 scale-95"
          }`}
        >
           {/* TARJETA REGISTRO */}
           <div className="w-full max-w-[450px] p-12 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white/60 relative overflow-hidden transition-all duration-500">
             <RegisterForm />
           </div>
        </div>

        {/* --- EL OVERLAY FLOTANTE (IMAGEN DESLIZANTE) --- */}
        <div 
          className={`absolute top-0 left-0 h-full w-1/2 z-40 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-hidden 
          shadow-[0_0_60px_-15px_rgba(0,0,0,0.6)] ${ 
            isSignUp 
              ? "translate-x-0 rounded-r-[60px]" 
              : "translate-x-full rounded-l-[60px]" 
          }`}
        >
          {/* CAMBIO AQUÍ: Fondo negro neutro para soporte */}
          <div className="relative w-full h-full bg-black text-white flex flex-col items-center justify-center text-center p-16">
            
            {/* IMAGEN ORIGINAL: Sin filtros de color extraños */}
            <img 
               src={loginBg} 
               alt="Background" 
               className="absolute inset-0 w-full h-full object-cover scale-105" 
            />
            
            {/* GRADIENTE DE LECTURA: Negro transparente solo para que se lea el texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

            {/* Contenido Texto */}
            <div className="relative z-10 max-w-lg animate-fade-in-up">
              <h2 className="text-5xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
                {isSignUp ? "¡Hola de nuevo!" : "¡Únete a la familia!"}
              </h2>
              <p className="mb-12 text-lg leading-relaxed text-gray-100 font-medium drop-shadow-md">
                {isSignUp 
                  ? "Conéctate para seguir cuidando a tus mascotas con la mejor tecnología."
                  : "Regístrate hoy y descubre un mundo de cuidado y amor para tu mejor amigo."}
              </p>
              
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="group relative px-12 py-4 overflow-hidden rounded-full bg-white/10 backdrop-blur-md text-white border-2 border-white font-bold shadow-lg transition-all hover:bg-white hover:text-primary hover:scale-105 active:scale-95"
              >
                <span className="relative uppercase tracking-wider text-sm z-10">
                  {isSignUp ? "Iniciar Sesión" : "Crear Cuenta"}
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}