/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'parallax': 'url("../public/imageparallax/graduate.jpg")',
        'parallax1hm': 'url("../public/imageparallax/bshmbg.jpg")',
        'parallax1it': 'url("../public/imageparallax/bsitbg1.jpg")',
        'parallax1ba': 'url("../public/imageparallax/BSBAbg.jpg")',

      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'title': ['Bebas Neue', 'sans-serif'],
        'para': ['Noto Serif', 'sans-serif'],
        'style-text': ['Playfair Display', 'sans-serif'],

      }
    },
    screens: {
      'sm': '650px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1700px',
      // => @media (min-width: 1536px) { ... }
    },
    
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': {
        100: '#ECF5FE',
        200: '#1348F6',
        300: '#093EEC',
        400: '#0839D9',
        500: '#0733C5',
        600: '#062EB1',
        700: '#06299D',
        800: '#05248A',
        900: '#011866',
        950: "#01124D",
    },

    'gray': {
      50: '#d4e8fd',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#011449',
      950: "#030712",
  },
    'violet': {
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
      950: "#2e1065",
  },
    'yellow': {
      100: '#F3D053',
      200: '#F2CB40',
      300: '#F0C62D',
      400: '#EFC11A',
      500: '#E5B710',
      600: '#D2A80F',
      700: '#BF980D',
      800: '#854d0e',
      900: '#713f12',
      950: "#422006",
  },
  'color': {
    100: '#F86C00',
    200: '#0095F8',
    300: '#CB0202',
    400: '#EFC11A',
    500: '#E5B710',
    600: '#D2A80F',
    700: '#BF980D',
    800: '#854d0e',
    900: '#713f12',
    950: "#422006",
},

    extend: {

      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
}

