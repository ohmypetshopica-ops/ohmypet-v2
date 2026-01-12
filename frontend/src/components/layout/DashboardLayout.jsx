import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Área de contenido dinámico.
          El margen izquierdo (ml-24 / lg:ml-80) deja espacio para el Sidebar flotante.
          'w-full' asegura que tome el resto del ancho.
      */}
      <main className="flex-1 p-8 ml-24 lg:ml-80 transition-all duration-300">
        <div className="max-w-7xl mx-auto animate-fade-in-up">
            <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;