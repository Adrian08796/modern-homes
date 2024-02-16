/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      backgroundImage: {
        'hero-pattern': "url('/images/Hero.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      screens: {
        xs: "300px",
        // => @media (min-width: 640px) { ... }
      },

      colors: {
        menuRed: "rgb(200,28,46)",
        navBg: "rgb(49,49,49)",
        pageBg: "rgb(24,27,29)",
      },

      fontSize: {
        customFont: "53pt",
      },

      spacing: {
        Adrian: "300px",
      },
    },
  },
  plugins: [],
};
