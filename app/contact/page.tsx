import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail } from 'lucide-react'

const BASE_URL = 'https://www.sunsolar.com'

export const metadata: Metadata = {
  title: 'Contact Us - Free Solar Consultation',
  description: 'Get a free solar consultation from Sun Solar Power Systems. Call +91 77080 01737 or WhatsApp +91 94892 31133. 15+ years experience, 1000+ installations.',
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Sun Solar Power Systems - Free Solar Consultation',
    description: 'Get a free solar consultation. Call or WhatsApp our solar experts today.',
    url: `${BASE_URL}/contact`,
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact#contact`,
  name: 'Contact Sun Solar Power Systems',
  description: 'Get a free solar consultation from Sun Solar Power Systems.',
  url: `${BASE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: 'Sun Solar Power Systems',
    telephone: ['+917708001737', '+919489231133'],
    email: 'sunsolarpowersystems@gmail.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+917708001737',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+919489231133',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/contact#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: `${BASE_URL}/contact` },
  ],
}

export default function ContactPage() {
  return (
    <section className="bg-[#f9fafb] min-h-screen flex items-center justify-center px-6 py-16 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="w-full max-w-2xl">
        <div className="bg-white border border-[#f3f4f6] rounded-2xl shadow-xl">
          <div className="p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-2">
              Get Free Consultation
            </h1>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Fill out the form below and our solar experts will get back to you within 24 hours.
            </p>

            <form className="space-y-5" action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  required
                  autoComplete="name"
                  aria-label="Full Name"
                  className="h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  required
                  autoComplete="tel"
                  aria-label="Phone Number"
                  className="h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="email"
                aria-label="Email Address"
                className="w-full h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400"
              />

              <textarea
                placeholder="Tell us about your solar needs..."
                name="message"
                rows={4}
                aria-label="Your message"
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all resize-none placeholder:text-neutral-400 leading-relaxed"
              />

              <button
                type="submit"
                className="w-full h-12 px-8 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/25"
              >
                Submit Request →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-neutral-600 text-sm flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
            <a href="https://wa.me/919489231133" className="text-green-600 font-semibold hover:text-green-700">
              +91 94892 31133
            </a>
          </p>
          <p className="text-neutral-600 text-sm flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-green-600" aria-hidden="true" />
            <a href="tel:+917708001737" className="text-green-600 font-semibold hover:text-green-700">
              +91 77080 01737
            </a>
          </p>
          <p className="text-neutral-600 text-sm flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-green-600" aria-hidden="true" />
            <a href="mailto:sunsolarpowersystems@gmail.com" className="text-green-600 font-semibold hover:text-green-700">
              sunsolarpowersystems@gmail.com
            </a>
          </p>
          <p className="text-neutral-500 text-xs">© 2024 Sun Solar Power Systems</p>
        </div>
      </div>
    </section>
  )
}
