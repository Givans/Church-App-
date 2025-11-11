export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        churchBlue: "#2b6cb0",
        churchGold: "#f6ad55",
        churchGray: "#edf2f7",
      },
      fontFamily: {
        heading: ["'Poppins'", "sans-serif"],
        body: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
