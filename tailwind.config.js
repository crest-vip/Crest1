/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'liquid-glass': 'rgba(255, 255, 255, 0.1)',
        'safe-glow': '#22c55e',
        'obsidian': '#050505',
      },
    },
  },
  plugins: [],
};