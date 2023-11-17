import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './_components'

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
			<body className={`${inter.className} bg-radial-dark w-full h-screen`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
