/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-image":
          "linear-gradient(to left,rgba(0, 89, 39, 0.7),rgba(45, 78, 90, 0.8)),url('https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg')",
      },
    },
  },
  plugins: [],
};
