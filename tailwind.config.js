/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        sysBackgroundColor: '#F5FBEF',
        greenPaste: '#84C318',
        outlineColor: '#84C318',
        callAction:"#92AD94"

      },
      backgroundImage: {
        actionBg: "url('/src/assets/action.svg')",
        recipeBg:"url('/src/assets/Recipe.svg')"
        // herobackground: "url('/src/assets/worldMap.svg')",
        // vacationbackground: "url('/src/assets/vacation.jpg')",
        // callActionBackground: "url('/src/assets/callAction.png')"
      },

    },
  },
  plugins: [],
}

