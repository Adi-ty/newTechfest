/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
      keyframes: {
        'zoom-out-fade' : {
            '0%' : { opacity : 1, transform: 'scale(1)'},
            '50%' : { opacity : 0.5, transform: 'scale(2.5)'},
            '100%' : { opacity : 0, transform: 'scale(5.0)'}
          },
          'fade-in' : {
            '0%' : { opacity : 0 },
            '100%' : { opacity : 1 },
            }
      }
    },
  },
  plugins: [],
};
