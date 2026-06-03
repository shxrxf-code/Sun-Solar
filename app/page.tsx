import type { Metadata } from 'next'
import Hero from '@/sections/Hero'
import TrustStrip from '@/sections/TrustStrip'
import Services from '@/sections/Services'
import SavingsROI from '@/sections/SavingsROI'
import HowItWorks from '@/sections/HowItWorks'
import WhyChooseUs from '@/sections/WhyChooseUs'
import FAQ from '@/sections/FAQ'
import Testimonials from '@/sections/Testimonials'
import Brands from '@/sections/Brands'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
  description: 'Premium solar installation services with 15+ years experience. 1000+ installations across India. Get free consultation, government subsidy support, and 25-year warranty.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Sun Solar Power Systems | Cut Electricity Bills by 95%',
    description: 'Premium solar installation services. 15+ years experience, 1000+ installations across India.',
    url: BASE_URL,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does solar cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost depends on your usage, but government subsidies reduce it significantly. Most systems pay for themselves in 5-6 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does installation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Installation typically takes 3-5 business days after site approval. We handle all paperwork for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide 25-year performance warranty on all solar panels and 5-year warranty on installation work.',
      },
    },
  ],
}

const homeBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/#breadcrumb-home`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
  ],
}

export default function Home() {
  return (
    <div className="bg-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeBreadcrumbSchema) }}
      />
      <Hero />
      <TrustStrip />
      <Services />
      <SavingsROI />
      <HowItWorks />
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <Brands />
    </div>
  )
}
