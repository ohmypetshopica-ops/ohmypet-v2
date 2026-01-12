import { useState } from 'react';
import { LoginForm } from '../features/auth/components/LoginForm';
import bgImage from '../assets/login-bg.jpg';
import { PawPrint } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex bg-white overflow-hidden">
      
      {/* === SECCIÓN IZQUIERDA - IMAGEN (50%) === */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 overflow-hidden">
        
        {/* Imagen de fondo */}
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-100 scale-105 animate-[spin_60s_linear_infinite]"
            style={{
              backgroundImage: `url(${bgImage})`, 
              animationDirection: 'alternate-reverse', 
              animationName: 'none' 
            }} 
        />
        
        {/* CORRECCIÓN AQUÍ: 
           Quitamos el 'mix-blend-multiply' y los colores verdes.
           Usamos un degradado negro simple (de arriba a abajo) para oscurecer la foto
           y asegurar que el texto blanco sea legible.
        */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        
        {/* Texto sobre la imagen */}
        <div className="relative z-10 w-full p-16 flex flex-col justify-between h-full text-white">
            <div className="animate-fade-in-up">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <PawPrint size={32} className="text-white" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight">OhMyPet</h1>
                </div>
            </div>

            <div className="max-w-md animate-fade-in-up delay-200">
                <h2 className="text-4xl font-extrabold leading-tight mb-6">
                    El mejor cuidado <br/> para tu mascota.
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                    Gestiona citas, historial clínico y productos desde un solo lugar. Rápido, seguro y confiable.
                </p>
            </div>

             <div className="text-sm text-gray-400 animate-fade-in-up delay-300">
                 © 2026 OhMyPet Inc.
             </div>
        </div>
      </div>
      
      {/* === SECCIÓN DERECHA - FORMULARIO (50%) === */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative overflow-hidden bg-white">
         
         {/* Burbujas decorativas (sutiles) */}
         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

         {/* Contenedor del formulario */}
         <div className="w-full max-w-md z-10">
            {/* Logo móvil */}
            <div className="lg:hidden mb-8 text-center animate-fade-in-up">
                 <div className="inline-flex items-center gap-2 text-primary justify-center">
                    <PawPrint size={35} />
                    <h1 className="text-2xl font-bold text-gray-800">OhMyPet</h1>
                </div>
            </div>
            
            <LoginForm />
         </div>
      </div>

    </div>
  );
};

export default LoginPage;