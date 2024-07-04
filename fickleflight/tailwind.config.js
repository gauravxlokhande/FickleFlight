/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "suscribe-image":
          "url('./src/assets/Images/Subscribesectionbackground.png')",
      },
    },
  },
  plugins: [],
};
