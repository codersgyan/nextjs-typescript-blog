/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#53BD95',
                'primary-dark': '#2c785c',
            },
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
    },
    plugins: [],
};
