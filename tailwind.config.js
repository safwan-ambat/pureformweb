/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#D6D6D6",
        "gray-100": "#8E8E8F",
        "gray-400": "#858585",
        "gray-500": "#5E0000",
        "primary-100": "#131415",
        "primary-300": "#FFA6A3",
        "primary-500": "#45BC65",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        geist: ['Geist','sans-serif'],
        georgia: ['georgia','sans-serif']
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },

      
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
      // sm: "480px",
      // sm: "768px",
      // md: "1060px",
    },
  },
  plugins: [],
};