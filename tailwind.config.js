/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Roboto", "sans-serif"]
      },
      dropShadow: {
        default: "0 4px 4px rgba(0, 0, 0, 0.25)"
      },
      animation: {
        slideUpAnimation: "slideUp 1s forwards 0s",
        slideRightAnimation: "slideRight 1s forwards 0s",
        wipeRightAnimation1: "wipeRight 0.7s forwards 1s",
        wipeRightAnimation2: "wipeRight 0.7s forwards 1.7s",
        fadeInAnimation: "fadeIn 1s forwards 2.4s",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" }
        }, 
        slideRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" }
        },
        wipeRight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}

