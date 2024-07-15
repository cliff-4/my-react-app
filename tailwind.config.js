/** @type {import('tailwindcss').Config} */
import palette from './src/palette.js'

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: palette
    },
  },
  plugins: [],
}

