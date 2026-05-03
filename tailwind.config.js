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
        },
        ai: {
          purple: '#7C3AED',
          'purple-deep': '#5B21B6',
          pink: '#EC4899',
          magenta: '#D946EF',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          dark: '#1E1B4B',
          light: '#F5F3FF'
        }
      }
    },
  },
  plugins: [],
};
