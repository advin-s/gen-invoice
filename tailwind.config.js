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
        'theme-content':'#0D0F11',
        'theme-content-secondary':'#4B5768',
        'theme-secondary':'#E8F3FC',
        'theme-tertiary':'#E7EAEE',
        'theme-border':'#64748B',
        'theme-placeholder':'#A0ABBB'
      }
    },
  },
  plugins: [],
}

