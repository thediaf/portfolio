module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
		keyframes: {
			wiggle: {
				'0%, 100%': {
					transform: 'rotate(-2deg)'
				},
				'50%': {
					transform: 'rotate(2deg)'
				},
			}
		},
		animation: {
			wiggle: 'wiggle 2s ease-in-out infinite',
		}
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
