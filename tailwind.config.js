/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  extend: {
    theme: {
      colors: {
        primary: "#f06414",
        customBlack: "#1d253a",
        customGray: "#f4f4f4",
      },
    },
  },
  plugins: [],
};
