import './globals.css'

export const metadata = {
  title: 'Netanor - Megbízható Távközlés',
  description: 'A Netanor a legjobb mobil és internet élményt nyújtja, bárhol is vagy.',
  keywords: 'távközlés, mobil, internet, Netanor, Magyarország',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
