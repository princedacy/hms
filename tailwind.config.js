module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '480px'},
      // => @media (max-width: 480px) { ... }

      'md': {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      'lg': {'max': '768px'},
      // => @media (max-width: 768px) { ... }

      'xl': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }

      '2xl': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }
    },
  },
  plugins: [],
}