/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        'safe-glow': '#22c55e',
        'liquid-glass': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
