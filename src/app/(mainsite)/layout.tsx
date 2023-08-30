import type { Metadata } from 'next'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Cartersville Outreach International',
  description: 'The envangelical ministry of Cartersville Outreach, preaching God\'s word internationally.',
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
        {children}
      <Footer />
    </>
  )
}