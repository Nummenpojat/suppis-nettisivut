/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'recipe3': 'repeat(auto-fit, minmax(300px, 500px))'
      },
    },
  },
  plugins: [],
}
