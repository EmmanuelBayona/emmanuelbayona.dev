import './globals.css'
import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

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
		<html lang="en">
			<body className={`${inter.className} bg-radial-dark w-full min-h-screen`}>
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	)
}
