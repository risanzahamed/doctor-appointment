/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {

            primary: "#0FCFEC",

            secondary: "#19D3AE",

            "accent": "#3A4256",

            "neutral": "#2B2E36",

            "base-100": "#F0EFF1",

            "info": "#9DBCE2",

            "success": "#22914E",

            "warning": "#F69904",

            "error": "#FB417F",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
