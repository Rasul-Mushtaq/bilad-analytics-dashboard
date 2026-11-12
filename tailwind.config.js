/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bilad: {
          bg: "#060f1e",
          surface: "#0f2440",
          card: "#13294b",
          border: "#1e3a5f",
          borderLight: "#2d4a73",
          accent: "#38bdf8",
          accentDim: "#2a9fd8",
          glow: "#0284c7",
          text: "#f1f5f9",
          textDim: "#94a3b8",
          textMuted: "#64748b",
          success: "#4ade80",
          warning: "#fbbf24",
          danger: "#f87171",
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Ubuntu',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        bilad: "0 10px 30px -10px rgba(2, 78, 115, 0.4)",
        "bilad-lg": "0 20px 40px -10px rgba(2, 78, 115, 0.5)",
        "bilad-accent": "0 0 40px -12px rgba(56, 189, 248, 0.35)",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
