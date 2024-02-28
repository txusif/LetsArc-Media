/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        blue1: "#0B60B0",
        white1: "#FFFFFF",
        white2: "#FFFBF5",
        white3: "#E5E1DA",
        black1: "#000000",
        black2: "#141414",
        grey1: "#D5DADD",
      },
    },
  },
  plugins: [],
};
