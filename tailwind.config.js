/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Histora: ["Histora Beralin", "serif"],
      circular: ["Circular Std", "sans-serif"],
    },
    extend: {
      colors: {
        lemonwt: "#f4f6f0",
        pastelpink: "#e0b9cb",
        trueblue: "#191825",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
