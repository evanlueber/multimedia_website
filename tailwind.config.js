/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('/public/img/bg.jpg')"
      }
    },
  },
  plugins: [],
}

