/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/backgorund.png')",      
    },
    fontFamily:{
      fredoka:["Fredoka", "sans-serif"],
    },
    colors: {
      'yellow': "#FEEB70",
      'yellow-light': "#F7EB9C",
      'yellow-medium': "#fed370",
      'yellow-dark': "#e8a746",
      'pink': "#FD88BE",
      'pink-light': "#ffb0d4",
      'pink-medium': "#e36499",
      'pink-dark': "#b34b76",
      'blue': "#98E6E6",
      'blue-light': "#bdfcfc",
      'blue-medium': "#74cfcf",
      'blue-dark': "#5897a3",
      'purple': "#9B5ED8",
      'purple-light': "#d4c0f0",
      'purple-medium': "#b78ae3",
      'purple-dark': "#9259c9",
      'customBlack': "#0F1020"
    }
  },
  plugins: [],
}
}
