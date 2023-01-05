/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'projectBlue': {
          100: '#62D5FA',
					300: '#3776FF',
					500: '#123182',
					700: '#0B2465',
					900: '#0E0D30'
        },
        'projectGrey': {
          100: '#D2D3D5',
					500: '#696969',
					900: '#202020'
        }
      }
    },
  },
  plugins: [],
}
