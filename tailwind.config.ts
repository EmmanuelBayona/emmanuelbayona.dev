import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'radial-dark': 'radial-gradient(66.48% 66.48% at 50% -0.7%, #222 0%, #111 100%)',
			},
			dropShadow: {
				'white-neon': '0px 0px 10px rgba(255, 255, 255, 0.40)',
			},
			colors: {
				'dark': '#1B1B1B',
				'dark-accent': '#2B2B2B',
			}
		},
	},
	plugins: [],
}
export default config
