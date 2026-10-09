/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e5ece5',
          200: '#cddbc9',
          300: '#a7bfa2',
          400: '#7e9f78',
          500: '#5c8056',
          600: '#476542',
          700: '#395035',
          800: '#2f412c',
          900: '#283726',
        },
      },
      boxShadow: {
        soft: '0 10px 35px -5px rgba(5, 150, 105, 0.08), 0 2px 10px -2px rgba(15, 23, 42, 0.04)',
        card: '0 4px 20px -2px rgba(16, 185, 129, 0.07), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        glow: '0 0 25px -5px rgba(16, 185, 129, 0.25)',
      },
    },
  },
  plugins: [],
}
