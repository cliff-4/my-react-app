/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#240115', // dark-purple
        secondary: '#de3c4b', // rusty-red
        tertiary: '#87f5fb', // electric-blue
        quarternary: '#2f131e', // dark-purple-2
        quinternary: '#cec3c1', // silver
      }
    },
  },
  plugins: [],
}

