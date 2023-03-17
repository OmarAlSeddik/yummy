/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yummy-red": "#DC3545",
        "yummy-green": "#198754",
        "yummy-blue-1": "#055160",
        "yummy-blue-2": "#B6EFFB",
        "yummy-blue-3": "#CFF4FC",
        "yummy-black": "#0D0D0D",
      },
    },
  },
  plugins: [],
};

module.exports = config;
