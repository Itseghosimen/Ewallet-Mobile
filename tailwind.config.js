/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18EAFF",
        background: "#0C0C12",
        "light-text": "#3A4452",
        "dark-text": "#CDBEBE",
        secondary: "#49515D",
        releive: "#12131B",
        releiveLight: "#F6F6F6",
        disabled: "#232730",
        disabledLight: "#2E2E2E",
        keyChainDark: "#191a24",
        keyChain: "#F4F4F4",
      },
      fontFamily: {
        inter: ["./assets/fonts/PlaywriteUSTrad-VariableFont_wght.ttf"],
      },
    },
  },
  plugins: [],
};
