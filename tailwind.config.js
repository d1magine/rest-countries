/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1315px',
    },
    extend: {
      colors: {
        // UI elements
        'dark-ui': 'hsl(209, 23%, 22%)',
        'light-ui': 'hsl(0, 0%, 100%)',

        // Background
        'dark-background': 'hsl(207, 26%, 17%)',
        'light-background': 'hsl(0, 0%, 98%)',

        // Text
        'dark-text': 'hsl(0, 0%, 100%)',
        'light-text': 'hsl(200, 15%, 8%)',
      },
      boxShadow: {
        circular: '0px 0px 5px rgba(0, 0, 0, 0.294)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
