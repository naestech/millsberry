/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'millsberry-blue': '#1887b6',
        'millsberry-lightBlue': '#cbf2fe',
        'millsberry-darkBlue': '#156a8a',
      },
    },
  },
  plugins: [],
} 