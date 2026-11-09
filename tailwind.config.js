/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bilad: {
          bg: "#060f1e",
          card: "#0b1d35",
          border: "#1e3a5f",
          accent: "#38bdf8",
          glow: "#0284c7",
        },
      },
    },
  },
  plugins: [],
};
