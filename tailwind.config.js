/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#38bdf8',
          teal: '#2dd4bf',
          deep: '#020617',
        },
      },
    },
  },
  plugins: [],
}

