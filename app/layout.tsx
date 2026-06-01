import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
  description: 'Premium solar installation services. 15+ years experience, 1000+ installations. Get free consultation and calculate your solar savings today.',
  keywords: 'solar panels, solar installation, solar energy, rooftop solar, solar subsidy India',
  openGraph: {
    title: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
    description: 'Premium solar installation services. 15+ years experience, 1000+ installations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
    description: 'Premium solar installation services. 15+ years experience, 1000+ installations.',
  },
  robots: { index: true, follow: true },
}

// Dynamically import heavy client components with SSR disabled for non-critical UI
const WhatsAppButton = dynamic(
  () => import('@/components/WhatsAppButton'),
  { ssr: false }
)

const LeadPopup = dynamic(
  () => import('@/components/LeadPopup'),
  { ssr: false }
)

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sun Solar Power Systems',
  description: 'Premium solar installation services with 15+ years experience and 1000+ installations across India.',
  url: 'https://www.sunsolar.com',
  telephone: '+917708001737',
  email: 'sunsolarpowersystems@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Solar Street',
    addressLocality: 'Green Energy Park',
    addressRegion: 'New Delhi',
    postalCode: '110001',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '28.588550', longitude: '77.208987' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '₹₹₹',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/sunsolar-logo.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-inter bg-white overflow-x-hidden">
        <Navbar />
        <main className="w-full pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <LeadPopup />
      </body>
    </html>
  )
}
