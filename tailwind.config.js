/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Roboto", "sans-serif"]
      },
      dropShadow: {
        default: "0 4px 4px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}

