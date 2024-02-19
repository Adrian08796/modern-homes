/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/Hero.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },

      screens: {
        smallPhone: "300px",
        phone: "300px",
        smallTablet: "768px",
        tablet: "992px",
        laptop: "1024px",
        desktop: "1280px",
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
