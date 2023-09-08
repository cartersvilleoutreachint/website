import type { Metadata } from 'next'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import Script from 'next/script'

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
      <div className="container">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
    </div>
        {children}
      <Footer />
    </>
  )
}