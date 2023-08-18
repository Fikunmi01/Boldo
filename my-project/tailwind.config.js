/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Manrope, sans-serif',
      },
      colors: {
        darkBlue: 'rgba(10, 38, 64, 1)', 
        lightGray:'rgba(241, 241, 241, 1)',
        green:'rgba(101, 228, 163, 1)',
        gray:'rgba(119, 119, 119, 1)',
        blaack:'rgba(0, 0, 0, 1)'
      },
    },
  },
  plugins: [],
};
