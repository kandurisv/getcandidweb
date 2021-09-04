module.exports = {
  mode : 'jit',
  // purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: ['./pages/**/*.js','./pages/*.js', './Components/**/*.js','./Components/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens : {
        "3xl" : "2000px"
      }
    },
    // colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
    //   theme: '#D7354A',
    //   theme1: '#F23D55',
    // },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
}
