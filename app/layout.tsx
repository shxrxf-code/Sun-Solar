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
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif'],
})

const BASE_URL = 'https://www.sunsolar.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
    template: '%s | Sun Solar Power Systems',
  },
  description: 'Premium solar installation services with 15+ years experience. 1000+ installations across India. Get free consultation and calculate your solar savings today.',
  keywords: [
    'solar panels', 'solar installation', 'solar energy', 'rooftop solar',
    'solar subsidy India', 'solar power system', 'solar company',
    'solar panel installation', 'renewable energy', 'solar water heater',
    'solar inverter', 'solar battery',
  ],
  authors: [{ name: 'Sun Solar Power Systems' }],
  creator: 'Sun Solar Power Systems',
  publisher: 'Sun Solar Power Systems',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
    description: 'Premium solar installation services. 15+ years experience, 1000+ installations across India.',
    url: BASE_URL,
    siteName: 'Sun Solar Power Systems',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/sunsolar-logo.png',
        width: 512,
        height: 512,
        alt: 'Sun Solar Power Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
    description: 'Premium solar installation services. 15+ years experience, 1000+ installations across India.',
    images: ['/sunsolar-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_TOKEN',
  },
  category: 'energy',
}

const WhatsAppButton = dynamic(
  () => import('@/components/WhatsAppButton'),
  { ssr: false }
)

const LeadPopup = dynamic(
  () => import('@/components/LeadPopup'),
  { ssr: false }
)

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Sun Solar Power Systems',
  url: BASE_URL,
  logo: `${BASE_URL}/sunsolar-logo.png`,
  description: 'Premium solar installation services with 15+ years experience and 1000+ installations across India.',
  foundingDate: '2009',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+917708001737',
    contactType: 'customer service',
    email: 'sunsolarpowersystems@gmail.com',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://wa.me/919489231133',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#localbusiness`,
  name: 'Sun Solar Power Systems',
  description: 'Premium solar installation services with 15+ years experience and 1000+ installations across India.',
  url: BASE_URL,
  telephone: '+917708001737',
  email: 'sunsolarpowersystems@gmail.com',
  image: `${BASE_URL}/sunsolar-logo.png`,
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Solar Street',
    addressLocality: 'Green Energy Park',
    addressRegion: 'New Delhi',
    postalCode: '110001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.588550',
    longitude: '77.208987',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  areaServed: [
    { '@type': 'City', name: 'New Delhi' },
    { '@type': 'State', name: 'Delhi NCR' },
    { '@type': 'Country', name: 'India' },
  ],
  parentOrganization: { '@id': `${BASE_URL}/#organization` },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Sun Solar Power Systems',
  url: BASE_URL,
  description: 'Premium solar installation services with 15+ years experience.',
  publisher: { '@id': `${BASE_URL}/#organization` },
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/sunsolar-logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
