/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        yellow: "#ffc82c",
        main: "#C92061",
        "main-dark": "#841341",
        "main-light": "#F1C5D6",
        black: "#272727",
        grey1: "#666666",
        grey2: "#999999",
        grey3: "#CCCCCC",
        grey4: "#F0F0F0",
        green: "#54A05C",
        red: "#FF3838",
        background: "#EBEBEB",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      extend: {
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
      backgroundImage: {
        "candidate-button": "url('./src/assets/images/candidate-button.png')",
        "company-button": "url('./src/assets/images/company-button.png')",
        underline: "url('./src/assets/images/underline.png')",
        step1: "url('./src/assets/images/step1.png')",
        step2: "url('./src/assets/images/step2.png')",
        step3: "url('./src/assets/images/step3.png')",
        step4: "url('./src/assets/images/step4.png')",
      },
      boxShadow: {
        image: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
