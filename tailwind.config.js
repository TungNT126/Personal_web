/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./**/*.html", "./main.js", "./assets/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        'workSans': ['workSans', 'sans-serif'],
        'epilogue': ['epilogue', 'sans-serif']
      },
      colors: {
        theme1: '#FFEED9',
        theme2: '#FFE6CC',
        ink: {
          50: "#f7f8fb",
          100: "#eef1f6",
          200: "#d9e0ec",
          300: "#b7c4db",
          400: "#8ea3c6",
          500: "#6b85b3",
          600: "#526a96",
          700: "#415477",
          800: "#2d3a55",
          900: "#1c2436",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        }
      }
    },
  },
  plugins: [],
}

