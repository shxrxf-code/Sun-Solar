import type { Metadata } from 'next'
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, Star } from 'lucide-react'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

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
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Road, Near Bus Stand',
      addressLocality: 'Ramanathapuram',
      addressRegion: 'Tamil Nadu',
      postalCode: '623501',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+917708001737',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Tamil'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+919489231133',
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi', 'Tamil'],
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
    <section className="bg-[#f9fafb] min-h-screen px-6 py-16 pt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-900">Get Free Consultation</h1>
          <p className="text-lg text-dark-600 mt-3 max-w-2xl mx-auto">
            Ready to switch to solar? Fill out the form or contact us directly. Our experts will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8 md:p-10">
              <form className="space-y-5" action="#" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" name="fullName" required autoComplete="name" aria-label="Full Name" className="h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400" />
                  <input type="tel" placeholder="Phone Number" name="phone" required autoComplete="tel" aria-label="Phone Number" className="h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400" />
                </div>
                <input type="email" placeholder="Email Address" name="email" autoComplete="email" aria-label="Email Address" className="w-full h-12 px-4 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all placeholder:text-neutral-400" />
                <textarea placeholder="Tell us about your solar needs..." name="message" rows={4} aria-label="Your message" className="w-full px-4 py-3 rounded-lg border border-neutral-200 text-base focus:outline-none focus:border-green-500 focus:shadow-[0_0_0_4px_rgba(34,197,94,0.12)] transition-all resize-none placeholder:text-neutral-400 leading-relaxed" />
                <button type="submit" className="w-full h-12 px-8 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/25">
                  Submit Request →
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
              <h2 className="text-lg font-bold text-dark-900 mb-6">Contact Information</h2>
              <div className="space-y-5">
                <a href="tel:+917708001737" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Phone</p>
                    <p className="font-semibold text-dark-900 group-hover:text-green-600 transition-colors">+91 77080 01737</p>
                  </div>
                </a>

                <a href="https://wa.me/919489231133" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">WhatsApp</p>
                    <p className="font-semibold text-dark-900 group-hover:text-green-600 transition-colors">+91 94892 31133</p>
                  </div>
                </a>

                <a href="mailto:sunsolarpowersystems@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Email</p>
                    <p className="font-semibold text-dark-900 group-hover:text-green-600 transition-colors break-all">sunsolarpowersystems@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Address</p>
                    <p className="font-semibold text-dark-900">
                      Main Road, Near Bus Stand,<br />
                      Ramanathapuram, Tamil Nadu 623501
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Business Hours</p>
                    <p className="font-semibold text-dark-900">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-dark-500">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="https://maps.google.com/?q=Sun+Solar+Power+Systems+Ramanathapuram+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
              <h2 className="text-lg font-bold text-dark-900 mb-4">Why Choose Us</h2>
              <div className="space-y-3">
                {[
                  { icon: ShieldCheck, text: '1000+ Successful Installations' },
                  { icon: Star, text: '4.9/5 Customer Rating' },
                  { icon: Clock, text: '15+ Years Experience' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-dark-700">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-8">
              <h2 className="text-lg font-bold text-dark-900 mb-4">Connect With Us</h2>
              <p className="text-sm text-dark-500 mb-4">Follow us on social media for solar tips and updates.</p>
              <div className="flex gap-3">
                <a href="https://wa.me/919489231133" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center hover:bg-green-100 transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </a>
                <a href="tel:+917708001737" className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center hover:bg-green-100 transition-colors" aria-label="Phone">
                  <Phone className="w-5 h-5 text-green-600" />
                </a>
                <a href="mailto:sunsolarpowersystems@gmail.com" className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center hover:bg-green-100 transition-colors" aria-label="Email">
                  <Mail className="w-5 h-5 text-green-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
