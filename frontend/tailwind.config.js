/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Sans MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

