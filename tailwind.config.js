/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme':'#1787E0',
        'theme-bg':'#FFFFFF',
        'theme-content':'#0D0F11'
      }
    },
  },
  plugins: [],
}
