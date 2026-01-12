import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, DollarSign, CalendarCheck } from 'lucide-react';
import clsx from 'clsx'; // <--- ¡ESTA LÍNEA FALTABA!

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="space-y-8 animate-fade-in-up">
        {/* Header simple */}
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Resumen General</h1>
            <p className="text-gray-500 mt-1">
                Bienvenido de nuevo, <span className="font-semibold text-primary">{user.name}</span>. Aquí tienes lo que pasa hoy.
            </p>
        </div>
        
        {/* Tarjetas de Estadísticas Estilizadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard 
                title="Citas para Hoy" 
                value="12" 
                icon={CalendarCheck} 
                trend="+20% vs ayer"
                color="blue"
            />
             <StatsCard 
                title="Ingresos del Mes" 
                value="S/ 4,500" 
                icon={DollarSign} 
                trend="+5% vs mes anterior"
                color="green" 
            />
             <StatsCard 
                title="Nuevos Clientes" 
                value="24" 
                icon={User} 
                trend="+2 esta semana"
                color="purple"
            />
        </div>

        {/* Sección de relleno para ver el scroll */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-96 flex items-center justify-center text-gray-400">
            Gráfico de Ventas (Próximamente con Python)
        </div>
    </div>
  );
};

// Componente pequeño para las tarjetas (interno)
const StatsCard = ({ title, value, icon: Icon, trend, color }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-emerald-50 text-emerald-600", 
        purple: "bg-purple-50 text-purple-600"
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</p>
                    <h3 className="text-3xl font-extrabold text-gray-900 mt-2">{value}</h3>
                </div>
                {/* Aquí es donde fallaba porque no conocía 'clsx' */}
                <div className={clsx("p-3 rounded-xl", colors[color] || colors.green)}>
                    <Icon size={24} />
                </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
                <span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                    {trend}
                </span>
            </div>
        </div>
    )
}

export default DashboardPage;