import './styles.css'
import type { Metadata } from 'next'
import { Roboto, Oswald } from 'next/font/google'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

const roboto = Roboto({weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"], display: "swap", variable: "--main-font"});
const oswald = Oswald({weight: ["200", "300", "500", "700"], subsets: ["latin"], display: "swap", variable: "--secondary-font"})

export const metadata: Metadata = {
  title: 'Cartersville Outreach International',
  description: 'The envangelical ministry of Cartersville Outreach, preaching God\'s word internationally.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
