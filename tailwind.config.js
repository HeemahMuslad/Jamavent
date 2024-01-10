/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/*.js"],
  theme: {
    extend: {
      gridColumn: ["responsive"],

      screens: {
        sm: { max: "550px" },
        md: { max: "730px" },
        lg: { max: "980px" },
        xl: "1440px",
      },
      colors: { primary: "#A084E8", secondary: "#F2F2F2" },
      width: {
        divWidth: "90%",
        internet: "50%",
        box1: "30%",
        box2: "20%",
        barWidth: "25px",
        small: "70%",
      },
      height: {
        barHeight: "3px",
      },
      // height:{boxHeight:}
    },
  },
  plugins: [],
};
