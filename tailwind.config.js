/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        default: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '786px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#667085',
        accent: {
          default: '#ed1d24',
          hover: `#dd242a`,
        },
        body: '#dedede',
      },
    },
  },
  plugins: [],
};
