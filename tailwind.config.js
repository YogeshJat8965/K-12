/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2447',
          sky: '#56CCF2',
          yellow: '#F2C94C',
          beige: '#F5E6D3',
          brown: '#8B4513'
        }
      }
    },
  },
  plugins: [],
};
