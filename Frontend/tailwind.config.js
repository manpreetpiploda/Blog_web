/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // content: [
  //   './pages/**/*.{html,js}',
  //   './components/**/*.{html,js}',
  // ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      position: ['responsive', 'sticky'],
      zIndex: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

