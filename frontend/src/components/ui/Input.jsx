// src/components/ui/Input.jsx
import clsx from 'clsx';

export const Input = ({ label, error, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-600 mb-1.5 ml-1">
          {label}
        </label>
      )}
      <input
        className={clsx(
          // Clases base más suaves
          "w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 font-medium",
          // Estados de foco y error mejorados
          error 
            ? "border-red-300 bg-red-50 focus:border-red-500 text-red-900" 
            : "border-gray-200 bg-gray-50/50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 text-gray-800",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1.5 ml-1 text-xs font-medium text-red-500 animate-fade-in-up">{error}</p>}
    </div>
  );
};