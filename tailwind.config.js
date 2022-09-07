/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#D96581",
          dark: {
            primary: "#444444",
            ligth: "rgba(0, 0, 0, 0.2)",
          },
          gray: {
            primary: "#9BABBF",
            light: "#F8F8F8",
            medium: "#818181",
          },
          label: "#C8CED4",
        },
      },
      screens: {
        xxl: "1440px",
      },
      boxShadow: {
        "3xl": "0px 5px 20px rgba(155, 171, 191, 0.3)",
      },
      fontSize: {
        "4.5xl": ["40px", "55px"],
      },
      maxWidth: {
        base: "1448px",
      },
      spacing: {
        13: "52px",
        15: "60px",
        18: "72px",
      },
      borderRadius: {
        base: "10px",
        40: "40px",
        30: "30px",
        20: "20px",
        10: "10px",
      },
      backgroundImage: {
        linear: "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "cormorant-upright": ["Cormorant Upright", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
