/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./admin.html",
    "./test-runner.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
          sans: ['Plus Jakarta Sans', 'sans-serif'] 
      },
      colors: {
          brand: {
              50: '#f0f7ff',
              100: '#e0effe',
              200: '#bae2fd',
              500: '#0ea5e9',
              600: '#0284c7',
              900: '#0c4a6e',
              navy: '#0b1329',
              slate: '#1c2541'
          }
      }
    }
  },
  plugins: [],
}
