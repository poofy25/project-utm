/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary":"#F95793",
        "gray":"rgba(247, 247, 249, 1)",
        "inputColor":"rgba(98, 98, 98, 0.87)",
        "grayText":"rgba(161, 161, 161, 0.87)",
        "lightRed":"rgb(255, 61, 0)",
        "primaryTransparent":"rgba(249, 87, 147, 0.31)"
      }
    },
  },
  plugins: [],
};
