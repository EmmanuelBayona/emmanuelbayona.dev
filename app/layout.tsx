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
        <html lang="en" className='dark'>
            <body className={cn(inter.className, "bg-zinc-950 min-h-screen grid grid-cols-1 grid-rows-[auto,1fr,auto]")}>
                <Navbar />
                {children}
                <Footer className='mt-10' />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
