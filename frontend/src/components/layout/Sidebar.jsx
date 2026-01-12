import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  PawPrint,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import clsx from 'clsx';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Resumen', path: '/dashboard' },
    { icon: Calendar, label: 'Citas', path: '/dashboard/citas' },
    { icon: Users, label: 'Clientes', path: '/dashboard/clientes' },
    { icon: ShoppingBag, label: 'Tienda', path: '/dashboard/tienda' },
    { icon: Settings, label: 'Configuración', path: '/dashboard/config' },
  ];

  return (
    <aside 
      className={clsx(
        "fixed top-0 left-0 z-50 h-[calc(100vh-32px)] m-4 bg-white shadow-2xl rounded-3xl transition-all duration-300 ease-in-out border border-gray-100 flex flex-col justify-between overflow-hidden",
        expanded ? "w-72" : "w-20"
      )}
    >
      {/* HEADER */}
      <div className="p-6 flex items-center justify-between relative">
        <div className={clsx("flex items-center gap-3 transition-opacity duration-300", expanded ? "opacity-100" : "opacity-0 absolute")}>
           <div className="p-2 bg-primary/10 rounded-xl text-primary">
             <PawPrint size={24} />
           </div>
           <span className="font-bold text-xl tracking-tight text-gray-800">OhMyPet</span>
        </div>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-primary transition-colors absolute right-4 top-6"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* NAVEGACIÓN */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => clsx(
              "flex items-center gap-4 px-3 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden",
              isActive 
                ? "bg-primary text-white shadow-lg shadow-primary/30" 
                : "text-gray-500 hover:bg-primary-light hover:text-primary"
            )}
          >
            <item.icon size={22} className="min-w-[22px]" />
            
            <span className={clsx("font-medium whitespace-nowrap transition-all duration-300 origin-left", 
                expanded ? "w-auto opacity-100" : "w-0 opacity-0 overflow-hidden"
            )}>
              {item.label}
            </span>

            {!expanded && (
                <div className="absolute left-full ml-6 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap shadow-lg">
                    {item.label}
                </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-100">
        <button 
            onClick={handleLogout}
            className={clsx(
                "flex items-center gap-4 px-3 py-3 w-full rounded-xl transition-all text-red-500 hover:bg-red-50 hover:text-red-600",
                !expanded && "justify-center"
            )}
        >
            <LogOut size={22} />
            <span className={clsx("font-medium whitespace-nowrap transition-all duration-300", expanded ? "w-auto opacity-100" : "w-0 opacity-0 hidden")}>
                Cerrar Sesión
            </span>
        </button>
      </div>
    </aside>
  );
};