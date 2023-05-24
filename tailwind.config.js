/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./index.html",
	"./src/**/*.{js,jsx}"
	],
  theme: {
    extend: {
		colors: {
			'primary-blue': {
				dark: '#1D6A96',
				light: '#85BBCB'
			},
			'primary-grey': '#D1DDDB',
			'primary-green': '#283B42'
		},
		scale: {
			'200': '2'
		}
	},
  },
  plugins: [],
}