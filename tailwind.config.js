/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "7.5xl": "1400px",
        "8xl": "1448px",
      },
      width: {
        "2.5xl": "645px",
      },
      spacing: {
        30: "30px",
        60: "60px",
      },
      borderRadius: {
        70: "80px",
        40: "40px",
        30: "30px",
        20: "20px",
        10: "10px",
      },
      backgroundImage: {
        linear:
          "linear-gradient(90deg, rgba(155, 171, 191, 0) 1.04%, #9BABBF 51.56%, rgba(155, 171, 191, 0) 100%)",
      },
      colors: {
        "gray-bg": "#F8F8F8",
        "site-pink": "#D96581",
        "text-pink": "#D96581",
        "dark-color": "#444",
        "gray-text": "#9BABBF",
        "gary-sm": "#818181",
        label: "#C8CED4",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        "cormorant-upright": ["Cormorant Upright", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "title-xl": ["50px", "61px"],
        "lg-text": ["22px", "33px"],
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
