 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./**/*.{html,js}"],
   theme: {
     extend: {
            fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
     colors:{
      custom:{
          red: "#ff2c1f",
        redHover: "#fa1216"
         }
     },
           fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      scrollPadding: {
        'top-2': '2rem'
      }
   },
   plugins: [],
 }
}