/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "star", // Tailwind の purge 対策
  ],
  theme: {
    extend: {
      fontFamily: {
        hannari: ["Hannari", "serif"],
      },
    },
  },
  plugins: [],
};
