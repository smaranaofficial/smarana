/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e3b7a0",     // soft beige
        secondary: "#8c5a3c",   // warm brown
        accent: "#fff6f1",      // light cream
        textdark: "#2b2b2b",    // deep text gray
        highlight: "#d48a6e",   // subtle coral highlight
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
