import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'Solar Water Pump in Ramanathapuram',
  description: 'Professional solar water pump installation in Ramanathapuram. Solar-powered irrigation pumps for farms, agriculture, and water supply. Government subsidy available. Free consultation.',
  alternates: {
    canonical: `${BASE_URL}/services/solar-water-pump`,
  },
  openGraph: {
    title: 'Solar Water Pump in Ramanathapuram | Sun Solar Power Systems',
    description: 'Solar water pump installation in Ramanathapuram. Agricultural irrigation, farm pumping, government subsidy. Free consultation.',
    url: `${BASE_URL}/services/solar-water-pump`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Solar Water Pump Ramanathapuram', item: `${BASE_URL}/services/solar-water-pump` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Solar Water Pump Installation in Ramanathapuram',
  description: 'Solar-powered water pump installation for agriculture, irrigation, and water supply in Ramanathapuram, Tamil Nadu. Subsidy-eligible solutions for farmers.',
  provider: { '@type': 'Organization', name: 'Sun Solar Power Systems', url: BASE_URL },
  areaServed: [{ '@type': 'City', name: 'Ramanathapuram' }, { '@type': 'State', name: 'Tamil Nadu' }],
}

export default function SolarWaterPumpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white">
        <section className="bg-gradient-to-b from-sky-50 to-white pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase">Solar Water Pump</p>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mt-2 leading-tight">
                  Solar Water Pump in <span className="text-primary-600">Ramanathapuram</span>
                </h1>
                <p className="text-lg text-dark-600 mt-4 leading-relaxed">
                  Power your agricultural irrigation with zero electricity cost. Sun Solar Power Systems offers high-quality solar water pump installation in Ramanathapuram for farms, borewells, and water supply systems. Eligible for government subsidy for farmers.
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
                <Image src="/images/services/solar-water-pump.webp" alt="Solar water pump installation in Ramanathapuram" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Benefits of Solar Water Pump</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                { title: 'Zero Electricity Cost', desc: 'No monthly power bills for irrigation. Free pumping using solar energy.' },
                { title: 'Government Subsidy', desc: 'Eligible for PM-KUSUM and state solar pump subsidies for farmers.' },
                { title: 'Low Maintenance', desc: 'Solar pumps have minimal moving parts and require very little upkeep.' },
                { title: 'Reliable in Remote Areas', desc: 'Perfect for farms with no grid access or unreliable power supply.' },
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
            <h2 className="text-3xl font-bold text-dark-900 text-center">Solar Water Pump Price in Ramanathapuram</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                { hp: '1 HP', price: '₹65,000 - ₹85,000', type: 'DC Surface Pump' },
                { hp: '2 HP', price: '₹1,00,000 - ₹1,40,000', type: 'DC Submersible' },
                { hp: '5 HP', price: '₹2,00,000 - ₹2,80,000', type: 'AC/DC Pump' },
                { hp: '10 HP', price: '₹3,50,000 - ₹5,00,000', type: 'Industrial Grade' },
              ].map((item) => (
                <div key={item.hp} className="p-6 bg-white border border-dark-200 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">{item.hp}</div>
                  <p className="text-dark-500 text-sm">{item.type}</p>
                  <p className="font-semibold text-dark-900 mt-3">{item.price}</p>
                  <p className="text-green-600 text-xs mt-2">Subsidy eligible</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Power Your Farm with Solar</h2>
            <p className="mt-3 text-primary-100">Get a free consultation and subsidy assistance for your solar water pump in Ramanathapuram.</p>
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
              <Link href="/services/solar-street-light" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">Solar Street Light</h3>
                <p className="text-sm text-dark-600 mt-1">Solar-powered outdoor lighting</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
