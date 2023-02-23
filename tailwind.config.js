/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#2E3349",
        grey: "#6B7082",
        lightGrey: "#E8E9EC",
        green: "#19A1AE",
      },
      boxShadow: {
        "card": "0 50px 100px -20px rgba(8, 70, 94, 0.504835)",
      },
    },
  },
  plugins: [],
}
