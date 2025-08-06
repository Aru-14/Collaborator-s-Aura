const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
   
  themes: [
    {
      collabaura: {
        primary: "#6366F1",
        secondary: "#FBBF24",
        accent: "#FBBF24",
        neutral: "#1F2937",
        "base-100": "#F9FAFB",
        "base-content": "#1F2937",
      },
    },
    {
      collabaura_dark: {
        primary: "#818CF8",
        secondary: "#FACC15",
        accent: "#FACC15",
        neutral: "#F9FAFB",
        "base-100": "#1F2937",
        "base-content": "#F9FAFB",
      },
    },
  ],

  darkTheme: "collabaura_dark",
  lightTheme: "collabaura",
  },


};
