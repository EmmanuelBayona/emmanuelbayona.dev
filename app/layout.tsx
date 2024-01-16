import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from 'components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Emmanuel Bayona',
	description: 'Emmanuel Bayona\'s portfolio',
	openGraph: {
		title: 'Emmanuel Bayona',
		description: 'Emmanuel Bayona\'s portfolio',
		url: 'https://emmanuelbayona.dev',
		siteName: 'Emmanuel Bayona',
		locale: 'en_US',
		type: 'website',
	},
	keywords: [
		"Emmanuel Bayona",
		"Portfolio",
		"Software Engineer",
	],
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en" className='dark relative h-full w-full bg-[#111]'>
			<body className={inter.className}>
				<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#272727,transparent)]">
					<Navbar />
					{children}
					<Analytics />
					<SpeedInsights />
				</div>
			</body>
		</html>
	)
}
