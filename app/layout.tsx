import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from 'components/nav'
import { cn } from 'lib/utils'
import { Footer } from 'components/footer'

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
		<html lang="en" className='dark relative min-h-screen w-full bg-[#111]'>
			<body className={cn('absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#272727,transparent)]', inter.className)}>
				<div className="min-h-screen bg-noise bg-[length:200px_200px] bg-left-top grid grid-cols-1 grid-rows-[auto,1fr,auto]" aria-hidden='true'>
					<Navbar />
					{children}
					<Footer className='mt-10'/>
					<Analytics />
					<SpeedInsights />
				</div>
			</body>
		</html>
	)
}
