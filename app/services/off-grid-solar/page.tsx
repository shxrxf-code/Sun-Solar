import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'Off Grid Solar System in Ramanathapuram',
  description: 'Complete off-grid solar system installation in Ramanathapuram. Battery backup, 24/7 power supply, energy independence. Ideal for areas with power cuts. Free consultation.',
  alternates: {
    canonical: `${BASE_URL}/services/off-grid-solar`,
  },
  openGraph: {
    title: 'Off Grid Solar System in Ramanathapuram | Sun Solar Power Systems',
    description: 'Off-grid solar system with battery backup in Ramanathapuram. 24/7 power supply, energy independence. Free consultation.',
    url: `${BASE_URL}/services/off-grid-solar`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Off Grid Solar System Ramanathapuram', item: `${BASE_URL}/services/off-grid-solar` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Off Grid Solar System Installation in Ramanathapuram',
  description: 'Complete off-grid solar system installation with battery storage in Ramanathapuram, Tamil Nadu. Energy independence for homes, farms, and businesses.',
  provider: { '@type': 'Organization', name: 'Sun Solar Power Systems', url: BASE_URL },
  areaServed: [{ '@type': 'City', name: 'Ramanathapuram' }, { '@type': 'State', name: 'Tamil Nadu' }],
}

export default function OffGridSolarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white">
        <section className="bg-gradient-to-b from-amber-50 to-white pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase">Off Grid Solar System</p>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mt-2 leading-tight">
                  Off Grid Solar System in <span className="text-primary-600">Ramanathapuram</span>
                </h1>
                <p className="text-lg text-dark-600 mt-4 leading-relaxed">
                  Achieve complete energy independence with our off-grid solar systems. Perfect for areas in Ramanathapuram district with frequent power cuts or no grid access. Our off-grid systems include high-capacity battery storage for 24/7 power supply, ensuring your home or farm never goes dark.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                    Get Free Consultation
                  </Link>
                  <Link href="/blog/on-grid-vs-off-grid-solar-system-ramanathapuram" className="inline-flex items-center px-6 py-3 border border-dark-300 text-dark-700 rounded-lg font-semibold hover:bg-dark-50 transition-colors">
                    Compare Systems
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image src="/Offgrid.jpg" alt="Off grid solar system installation in Ramanathapuram" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Benefits of Off-Grid Solar System</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                { title: 'Complete Energy Independence', desc: 'No dependence on the electricity grid. Generate and store your own power.' },
                { title: '24/7 Power Supply', desc: 'Battery storage ensures power availability even at night and during cloudy days.' },
                { title: 'Power During Outages', desc: 'Stay powered during grid failures and load shedding common in rural areas.' },
                { title: 'No Electricity Bills', desc: 'Once installed, enjoy free electricity for decades with minimal maintenance.' },
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
            <h2 className="text-3xl font-bold text-dark-900 text-center">Off-Grid Solar System Price in Ramanathapuram</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                { size: '1kW', price: '₹80,000 - ₹1,00,000', backup: 'Basic backup' },
                { size: '3kW', price: '₹1,80,000 - ₹2,50,000', backup: 'Essential loads' },
                { size: '5kW', price: '₹2,50,000 - ₹3,50,000', backup: 'Full home backup' },
                { size: '10kW', price: '₹4,50,000 - ₹6,00,000', backup: 'Complete solution' },
              ].map((item) => (
                <div key={item.size} className="p-6 bg-white border border-dark-200 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">{item.size}</div>
                  <p className="text-dark-500 text-sm">Off-Grid System</p>
                  <p className="font-semibold text-dark-900 mt-3">{item.price}</p>
                  <p className="text-dark-500 text-sm mt-1">{item.backup}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Ready for Energy Independence?</h2>
            <p className="mt-3 text-primary-100">Get a free consultation for your off-grid solar system in Ramanathapuram.</p>
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
              <Link href="/services/on-grid-solar" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">On Grid Solar System</h3>
                <p className="text-sm text-dark-600 mt-1">Grid-tied with net metering benefits</p>
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
