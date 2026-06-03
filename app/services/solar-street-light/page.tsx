import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'Solar Street Light in Ramanathapuram',
  description: 'Professional solar street light installation in Ramanathapuram. Automatic solar-powered LED lighting for roads, compounds, parks, and commercial spaces. Zero electricity cost. Free consultation.',
  alternates: {
    canonical: `${BASE_URL}/services/solar-street-light`,
  },
  openGraph: {
    title: 'Solar Street Light in Ramanathapuram | Sun Solar Power Systems',
    description: 'Solar street light installation in Ramanathapuram. Automatic LED lighting for roads, compounds, parks. Zero electricity bill. Free consultation.',
    url: `${BASE_URL}/services/solar-street-light`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Solar Street Light Ramanathapuram', item: `${BASE_URL}/services/solar-street-light` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Solar Street Light Installation in Ramanathapuram',
  description: 'Automatic solar street light installation in Ramanathapuram, Tamil Nadu. Solar-powered LED lighting for roads, residential compounds, commercial spaces, and public areas.',
  provider: { '@type': 'Organization', name: 'Sun Solar Power Systems', url: BASE_URL },
  areaServed: [{ '@type': 'City', name: 'Ramanathapuram' }, { '@type': 'State', name: 'Tamil Nadu' }],
}

export default function SolarStreetLightPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white">
        <section className="bg-gradient-to-b from-yellow-50 to-white pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase">Solar Street Light</p>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mt-2 leading-tight">
                  Solar Street Light in <span className="text-primary-600">Ramanathapuram</span>
                </h1>
                <p className="text-lg text-dark-600 mt-4 leading-relaxed">
                  Illuminate your streets, compounds, and commercial spaces with zero electricity cost. Sun Solar Power Systems provides high-quality automatic solar street light installation in Ramanathapuram with dusk-to-dawn operation, motion sensors, and long-lasting LED lighting.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                    Get Free Consultation
                  </Link>
                  <Link href="/blog/on-grid-vs-off-grid-solar-system-ramanathapuram" className="inline-flex items-center px-6 py-3 border border-dark-300 text-dark-700 rounded-lg font-semibold hover:bg-dark-50 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image src="/images/services/solar-street-light.webp" alt="Solar street light installation in Ramanathapuram" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Benefits of Solar Street Light</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                { title: 'Zero Electricity Bills', desc: 'Free lighting powered entirely by solar energy with no ongoing costs.' },
                { title: 'Automatic Operation', desc: 'Dusk-to-dawn auto on/off with built-in light sensors and optional motion detection.' },
                { title: 'Easy Installation', desc: 'No trenching, cabling, or grid connection needed. Installed in hours.' },
                { title: 'Weatherproof Design', desc: 'IP65 rated fixtures designed for Ramanathapuram weather conditions.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-6 border border-dark-200 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900">{item.title}</h3>
                    <p className="text-dark-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Solar Street Light Price in Ramanathapuram</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                { type: '12W LED', price: '₹4,500 - ₹6,500', usage: 'Residential compound' },
                { type: '20W LED', price: '₹7,000 - ₹10,000', usage: 'Walkways & gardens' },
                { type: '40W LED', price: '₹12,000 - ₹18,000', usage: 'Street & road lighting' },
                { type: '60W LED', price: '₹18,000 - ₹28,000', usage: 'Highway & large areas' },
              ].map((item) => (
                <div key={item.type} className="p-6 bg-white border border-dark-200 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">{item.type}</div>
                  <p className="text-dark-500 text-sm">{item.usage}</p>
                  <p className="font-semibold text-dark-900 mt-3">{item.price}</p>
                  <p className="text-green-600 text-xs mt-2">Zero electric bill</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Light Up Your Space with Solar</h2>
            <p className="mt-3 text-primary-100">Get a free consultation for solar street light installation in Ramanathapuram.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/contact" className="px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg">
                Get Free Quote
              </Link>
              <a href="tel:+917708001737" className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Call +91 77080 01737
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-dark-900 text-center">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Link href="/services/solar-panel-installation" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">Solar Panel Installation</h3>
                <p className="text-sm text-dark-600 mt-1">Professional rooftop solar installation</p>
              </Link>
              <Link href="/services/off-grid-solar" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">Off Grid Solar System</h3>
                <p className="text-sm text-dark-600 mt-1">Energy independence with battery backup</p>
              </Link>
              <Link href="/services/solar-water-pump" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">Solar Water Pump</h3>
                <p className="text-sm text-dark-600 mt-1">Solar-powered irrigation solutions</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
