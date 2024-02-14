/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["roboto", "sans-serif"],
    },
    extend: {
      colors: {
        dispo: {
          white: "#ffffff",
          ligherBlueGray: "#eaedf2",
          lighterGray: "#eff3f6",
          thinGray: "#dcdcdc",
          lightGray: "#d6d7dc",
          gray: "#a9aabe",
          darkerGray: "#5c5b6b",
          blue: "#5192fa",
          darkBlue: "#231e60",
          darkerBlue: "#171a2d",
          yellow: "#fec107",
          dark: "#1b1c3b",
          black: "#000000",
        },
      },
      borderRadius: {
        "2xl": "2rem",
        "3xl": "3rem",
      },
      fontSize: {
        "2xl": "2rem",
      },
      spacing: {
        320: "80rem",
      },
      backgroundImage: {
        contentHeader: "url('/header-bg.svg'), linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        contentHeader: "18em, auto",
      },
    },
  },
  plugins: [],
};
