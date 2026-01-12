import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dashboard';
import DashboardLayout from './components/layout/DashboardLayout';
import Maintenance from './components/ui/Maintenance'; // Importar el componente nuevo

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />, // El Layout contiene el Sidebar
    children: [
        {
            index: true, 
            element: <DashboardPage /> 
        },
        {
            path: 'citas',
            element: <Maintenance title="Módulo de Citas" />
        },
        {
            path: 'clientes',
            element: <Maintenance title="Gestión de Clientes" />
        },
        {
            path: 'tienda',
            element: <Maintenance title="Tienda Virtual" />
        },
        {
            path: 'config',
            element: <Maintenance title="Configuración del Sistema" />
        }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/login" />
  }
]);

export default router;