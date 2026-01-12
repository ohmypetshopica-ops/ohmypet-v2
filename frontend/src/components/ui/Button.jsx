// src/components/ui/Button.jsx
import clsx from 'clsx';

export const Button = ({ children, isLoading, variant = 'primary', className, ...props }) => {
  const variants = {
    // Sombra más difuminada y efecto de escala al hover
    // Dentro de variants...
primary: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 ...",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-[1.02]",
    outline: "border-2 border-primary text-primary hover:bg-primary-light"
  };

  return (
    <button
      disabled={isLoading}
      className={clsx(
        // Bordes más redondeados (rounded-xl) y transición suave
        "w-full py-3 px-6 rounded-xl font-bold tracking-wide transition-all duration-200 flex justify-center items-center gap-2",
        variants[variant],
        isLoading && "opacity-80 cursor-not-allowed hover:scale-100",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-[3px] border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
    </button>
  );
};