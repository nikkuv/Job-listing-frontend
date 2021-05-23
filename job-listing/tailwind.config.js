module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors:{
        cyan : 'hsl(180, 29%, 50%)',
        light_gray_cyan : 'hsl(180, 52%, 96%)',
        very_light_gray_cyan : 'hsl(180, 31%, 95%)',
        dark_gray_cyan : 'hsl(180, 8%, 52%)',
        very_dark_gray_cyan :'hsl(180, 14%, 20%)',
        white : '#fff',
        black : '#000',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
}