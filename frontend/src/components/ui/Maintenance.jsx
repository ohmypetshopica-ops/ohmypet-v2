import { Construction, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

const Maintenance = ({ title = "Sección en Construcción" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-fade-in-up">
      <div className="bg-primary/10 p-6 rounded-full mb-6">
        <Construction size={64} className="text-primary" />
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        Estamos trabajando duro para traerte esta funcionalidad en la próxima actualización del sistema OhMyPet.
      </p>

      <div className="w-48">
        <Button variant="outline" onClick={() => navigate('/dashboard')}>
            <ArrowLeft size={18} />
            Volver al Inicio
        </Button>
      </div>
    </div>
  );
};

export default Maintenance;