/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'vsm': '1px',
      sm: '375px',
      'mod': '460px',  
      md: '600px',
      lg: '1440px',
      xl: '1540px',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        clashfont: ['clashdisplaysemi'],
        clashfont2: ['clashdisplaymedium'],
        proxima: ['Proxima Nova']
      },

      colors: {
        'orangee': 'hsl(25, 97%, 53%)',
        'dark-black': 'hsla(255, 7%, 11%, 87%)',
        'my-greys': 'rgba(217, 217, 217, 69%)',
        'my-greys-2': 'rgba(19, 19, 19, 100%)',
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

