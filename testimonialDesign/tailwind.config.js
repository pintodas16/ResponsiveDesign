/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        violet: "hsl(263, 55%, 52%)",
        white: "hsl(0, 0%, 100%)",
        "dark-grayish-blue": "hsl(217, 19%, 35%)",
        "dark-blackish-blue": "hsl(219, 29%, 14%)",

        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
