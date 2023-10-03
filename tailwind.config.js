/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        clashfont: ['clashdisplay']
      },

      colors: {
        'orangee': 'hsl(25, 97%, 53%)',
        'dark-black': 'hsla(255, 7%, 11%, 87%)',
        'my-greys': 'rgba(217, 217, 217, 69%)',
        'whitee': 'hsl(0, 0%, 100%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      }, 
    },
  },
  plugins: [],
}

