import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./content/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				'noise': 'url("/noise.png")',
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
	plugins: [
		require('@tailwindcss/typography'),
	],
}
export default config
