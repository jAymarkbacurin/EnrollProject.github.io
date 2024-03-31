/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'parallax': 'url("../public/imageparallax/graduate.jpg")',
        'parallax1hm': 'url("../public/imageparallax/bshmbg.jpg")',
        'parallax1it': 'url("../public/imageparallax/bsitbg.jpg")',
        'parallax1ba': 'url("../public/imageparallax/BSBAbg.jpg")',

      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'title': ['Gloock', 'sans-serif'],
        'semititle': ['Montserrat', 'sans-serif'],
        'header': ['Kodchasan', 'sans-serif'],
        'para': ['Wix Madefor Text', 'sans-serif'],

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
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#000C8F',
        950: "#000866",
    },
    'sky': {
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#1f2937',
      900: '#111827',
      950: "#030712",
  },
    'gray': {
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
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
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',
      600: '#ca8a04',
      700: '#a16207',
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

