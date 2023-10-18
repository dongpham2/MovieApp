/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans","sans-serif"]
      },
      colors: {
        primary: "#f62682",
        blackcolor: "#181818",
        contentcolor: "#332834",
    }
    },
  },
  plugins: [],
}