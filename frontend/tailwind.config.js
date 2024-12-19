/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Orbitron", "sans-serif"],
        mono: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        customRed: "#EB0000", // Add your custom color here
      },

      keyframes: {
        move: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        moveReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        move: "move 15s linear infinite", // 'move' is the name, '2s' is duration, 'linear' is timing function, 'infinite' for looping
        moveReverse: "moveReverse 10s linear infinite", // 'move' is the name, '2s' is duration, 'linear' is timing function, 'infinite' for looping
      },
    },
  },
  plugins: [],
};
