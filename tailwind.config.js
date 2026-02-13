/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        // Fundo
        'bg-base': '#110B31',
        
        // Gradientes
        'gradient-1': 'rgba(48, 157, 200, 0.92)',
        'gradient-2': 'rgba(8, 48, 94, 0.86)',
        'gradient-3': 'rgba(13, 31, 194, 0.89)',
        
        // Texto
        'text-primary': '#EEF4ED',
        'text-secondary': 'rgba(238, 244, 237, 0.86)',
        
        // Cards / superfícies
        'card-light': 'rgba(238, 244, 237, 0.08)',
        'card-dark': 'rgba(15, 25, 40, 0.40)',
        
        // Bordas / strokes
        'stroke-default': 'rgba(238, 244, 237, 0.30)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        'section': '96px',
      },
      borderRadius: {
        'card': '12px',
        'card-lg': '16px',
      },
    },
  },
  plugins: [],
}
