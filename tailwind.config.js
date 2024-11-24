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
          50: '#FDF8F3',
          100: '#FAEAD2',
          200: '#F5D5A7',
          300: '#EBB96C',
          400: '#DCA049',
          500: '#C5A572', // Main primary color
          600: '#B08D4C',
          700: '#8B6A31',
          800: '#6A4F23',
          900: '#523C1B',
        },
        secondary: {
          50: '#F5F5F5',
          100: '#E9E9E9',
          200: '#D9D9D9',
          300: '#BFBFBF',
          400: '#A6A6A6',
          500: '#1A1A1A', // Main secondary color
          600: '#141414',
          700: '#0F0F0F',
          800: '#0A0A0A',
          900: '#050505',
        },
        dubai: {
          sand: {
            light: '#FFF5E6',
            DEFAULT: '#F2D4AB',
            dark: '#E6B980',
          },
          gold: {
            light: '#FFE566',
            DEFAULT: '#FFD700',
            dark: '#E6C200',
          },
          night: {
            light: '#3949AB',
            DEFAULT: '#1A237E',
            dark: '#0D1C4B',
          },
          sea: {
            light: '#4FC3F7',
            DEFAULT: '#0288D1',
            dark: '#01579B',
          },
          palm: {
            light: '#81C784',
            DEFAULT: '#388E3C',
            dark: '#1B5E20',
          },
        },
        accent: {
          coral: '#FF6B6B',
          turquoise: '#4ECDC4',
          purple: '#6C5CE7',
          orange: '#FF9F43',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
