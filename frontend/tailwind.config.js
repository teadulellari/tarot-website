
// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customColor1: '#171237',
        customColor2: '#CAC8ED'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
