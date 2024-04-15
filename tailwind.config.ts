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
            boxShadow: {
                'card': '0 0 0 1px rgba(39, 39, 42, 1), inset 0 1px 0 0 rgba(63, 63, 60, 1)',
                'pink': '0 0 0 3px rgb(131, 24, 76), inset 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
export default config
