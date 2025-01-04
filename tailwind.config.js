// tailwind.config.mjs


export default {
  content: ["**/*.html"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
