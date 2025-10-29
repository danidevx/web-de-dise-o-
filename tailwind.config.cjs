/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7fbfb',
          100: '#eef7f6',
          500: '#0f4c5c',
          700: '#0b3a46'
        }
      },
      keyframes: {
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        tilt: {
          '0%': { transform: 'rotateX(0) rotateY(0)' },
          '100%': { transform: 'rotateX(6deg) rotateY(-6deg)' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        tilt: 'tilt 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
