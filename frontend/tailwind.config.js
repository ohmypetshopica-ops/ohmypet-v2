/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669', // <--- NUEVO: Un verde esmeralda más rico y sólido
          hover: '#047857',   // <--- Al pasar el mouse: Un tono más serio y oscuro
          light: '#ECFDF5',   // <--- Fondos: Un menta muy suave y limpio
        },
        secondary: '#064E3B', // Un verde bosque profundo para contrastes fuertes
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Aseguramos una fuente limpia si la tienes instalada
      }
    },
  },
  plugins: [],
}