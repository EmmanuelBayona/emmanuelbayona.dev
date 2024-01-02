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
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en" className='dark bg-radial-dark min-h-screen'>
			<body className={inter.className}>
				<Navbar />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
