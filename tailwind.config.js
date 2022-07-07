/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: () => ({
        "screen-size": "calc(100vh - 64px)",
      }),
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Quattrocento: ["Quattrocento", "serif"],
      },
    },
  },
  plugins: [],
};
