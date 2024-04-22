/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Text': ['Montserrat', 'sans-serif'],
        'Titles': ['Montserrat Alternates', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

