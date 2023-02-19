/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        monoserrat:["var(--font-montserrat)"],
      },
      gridTemplateColumns:{
          fluid : "repeat(auto-fit,minmax(15rem,1fr))",
      },
    },
  },
  plugins: [],
}
// https://api.themoviedb.org/3/movie/550?api_key=3808b7e86e097fdb948f288a65dfe3fa
// 3808b7e86e097fdb948f288a65dfe3fa