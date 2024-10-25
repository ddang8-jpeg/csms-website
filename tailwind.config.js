const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js"
  ],
  theme: {
  	extend: {
  		colors: {
  			darkBlue: '#002D72',
  			lightBlue: '#68ACE5',
  			mediumBlue: '#0077D8',
  			harborBlue: '#4E97E0'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
};
