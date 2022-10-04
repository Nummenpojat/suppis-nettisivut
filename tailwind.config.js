/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // added new 4 column grid as new4
        'recipe3': 'repeat(auto-fit, minmax(300px, 500px))'
      }
    },
  },
  plugins: [],
}
