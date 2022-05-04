module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 14px 30px rgb(0 5 15 / 10%), 0 4px 4px rgb(0 5 15 / 4%);',
      },
      backgroundImage: {
        'banner-shadow':
          'linear-gradient(180deg,rgba(6,13,34,0) 40%,rgba(6,13,34,.8))',
      },
      gridTemplateColumns: {
        'row-poster': 'grid-template-columns: repeat(auto-fill,180px)'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
};
