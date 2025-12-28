/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      animation: {
        "breathe": "breathe 10s ease-in-out infinite",
        "blur-in": "blurIn 0.8s ease-out forwards",
        "scroll": "scroll 40s linear infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: 0.4 },
          "50%": { transform: "scale(1.1)", opacity: 0.7 },
        },
        blurIn: {
          "0%": { filter: "blur(10px)", opacity: 0, transform: "translateY(10px)" },
          "100%": { filter: "blur(0px)", opacity: 1, transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};