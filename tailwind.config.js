const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            blue: {
                200: "#90caf9",
                700: '#0369a1',
            }
        },
    },
    fontFamily: {
      sans: ["Roboto", 'sans-seris']
    }
  },
  plugins: [],
});

