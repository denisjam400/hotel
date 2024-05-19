/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{html,js,jsx}",
    "./src/scenes/**/*.{html,js,jsx}",
    "./src/Utils/**/*.{html,js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      xs: "345px",
      sm: "530px",
      md: "630px",
      lg: "990px",
      xl: "1440px",
    },
    fontFamily: {
      Centra: ["Centra", "sans-serif"],
      CoffekanRegular: ["CoffekanRegular", "sans-serif"],
      KenokyLight: ["KenokyLight", "serif"],
      GreatVibes: ["cursive"], // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      colors: {
        DGold: "#daa520",
        HGold: "#ffd700",
        Black: "#121212",
        defaultBlack: "#222",
      },
      backgroundImage: {
        otherNavHeader:
          "url('/src/Asset/Banner/pexels-mark-mccammon-2724749.jpg')",
      },
    },
  },
  plugins: [],
};
