/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      "quicksand-bold": ['"quicksand-bold"'],
      "quicksand-semibold": ['"quicksand-semibold"'],
      "quicksand-regular": ['"quicksand-regular"'],
      "quicksand-medium": ['"quicksand-medium"'],
      "quicksand-light": ['"quicksand-light"'],
      "bitter-rose": ['"bitter-rose"'],
      sigmar: ['"sigmar"'],
      varela: ['"varela"'],
    },
    extend: {
      colors: {
        purpleColor: "#6C63FF",
        whiteColor: "#F7F7F7",
        blackColor: "#252525",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
