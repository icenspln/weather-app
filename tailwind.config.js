/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkest: "#242424",
        grayest: "#F5F5F5"
      }
    },
  },
  plugins: [],
}