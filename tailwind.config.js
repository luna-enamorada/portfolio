/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.css', 
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
}

