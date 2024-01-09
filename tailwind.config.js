/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pack-train': "url('../public/Images/bg-circle.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor:{
        'text-grad': 'text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400'
      },
      colors: {
        'inputf': '#171717'
      },
    },
    
  },
  plugins: [],
}

