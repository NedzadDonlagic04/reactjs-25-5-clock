/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{js,jsx}"
	],
  theme: {
	colors: {
		'primary-blue': {
			dark: '#1D6A96',
			light: '#85BBCB'
		},
		'primary-grey': '#D1DDDB',
		'primary-green': '#283B42'
	},
    extend: {},
  },
  plugins: [],
}

