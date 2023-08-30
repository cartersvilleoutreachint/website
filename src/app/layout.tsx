import "./styles.css"
import { Roboto, Oswald } from 'next/font/google'

const roboto = Roboto({weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"], display: "swap", variable: "--main-font"});
const oswald = Oswald({weight: ["200", "300", "500", "700"], subsets: ["latin"], display: "swap", variable: "--secondary-font"})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  )
}
