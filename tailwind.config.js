const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue_gray: "#343642",
        plum: "#962D3E",
        gray: "#979C9C",
        light_yellow: "#F2EBC7",
        aqua: "#348899",
        white_custom: "#fffefa",
        dim: "rgba(26, 25, 32, 0.5)",
        grey: colors.gray,
      },
    },
  },
  plugins: [],
};
