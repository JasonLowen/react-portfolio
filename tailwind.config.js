/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '3px 3px #ea580c',
        '4xl': '3px 3px #1e40af',
        '5xl': '3px 3px #eab308',
        '6xl': '3px 3px #22d3ee',
        '7xl': '3px 3px #22c55e',
        '8xl': '3px 3px #0369a1',
        '9xl': '3px 3px #ffffff',
        '10xl': '3px 3px #6b21a8',
      }
    },
  },
  plugins: [],
}