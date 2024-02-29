/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          Yellow: 'hsl(47, 88%, 63%)',
        },
        neutral: {
          White: ' hsl(0, 0%, 100%)',
          Grey: 'hsl(0, 0%, 50%)',
          Black: 'hsl(0, 0%, 7%)',
        },
      },
      boxShadow: {
        shadon: '10px 10px 0px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}

