/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // For Next.js, this tells Tailwind where to look for classes
    './components/**/*.{js,ts,jsx,tsx}', // Add your components folder if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
