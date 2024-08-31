/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        "container" : "1180px"
      },
      fontFamily:{
        "robot" :" Roboto, system-ui"
      }
    },
  },
  plugins: [],
}