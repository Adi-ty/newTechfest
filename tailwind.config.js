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
                navVariant: {
                    '0%': {
                        opacity : 0,
                        transform : 'translateY(-40px)',
                    },
                    '25%': {
                        opacity : 0.25,
                        transform : 'translateY(-30px)',
                    },
                    '50%': {
                        opacity : 0.5,
                        transform : 'translateY(-20px)',
                    },
                    '75%': {
                        opacity : 0.75,
                        transform : 'translateY(-10px)',
                    },
                    '100%': {
                        opacity : 1,
                        transform : 'translateY(0px)',
                    }
                }
            },
            animation: {
                'navbar': 'navVariant 1s cubic-bezier(0.05, 0.6, 0.4, 0.9)',
            }
        },
    },
    plugins: [],
};
