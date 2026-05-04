/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'liquid-glass': 'rgba(255, 255, 255, 0.1)',
        'safe-glow': '#35D07F',
        'obsidian': '#0A0A0B',
      },
    },
  },
  plugins: [],
}