/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9F7F3',
        'secondary': '#1B2629',
        'btnColor': '#9C702A',
      }
    },
  },
  plugins: [],
}

