/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Brand Colors
      colors: {
        primary: "#03499e",       // Deep Blue
        "primary-dark": "#023578", // Darker Blue
        secondary: "#ef191a",     // Vibrant Red
        "secondary-dark": "#d01011", // Darker Red
        light: {
          blue: "#e6f0fa",        // Light Blue (backgrounds)
          red: "#fde8e8",         // Light Red (alerts)
        },
      },
      // Typography (Roboto)
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Default font
      },
      // Extended Spacing (8px grid)
      spacing: {
        18: "4.5rem",            // 72px
      },
      // Animation (Framer Motion integration)
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};