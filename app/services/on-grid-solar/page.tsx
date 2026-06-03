import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'On Grid Solar System in Ramanathapuram',
  description: 'Best on-grid solar system installation in Ramanathapuram. Net metering support, government subsidy, 25-year warranty. Reduce electricity bills by 95%. Free consultation.',
  alternates: {
    canonical: `${BASE_URL}/services/on-grid-solar`,
  },
  openGraph: {
    title: 'On Grid Solar System in Ramanathapuram | Sun Solar Power Systems',
    description: 'On-grid solar system installation in Ramanathapuram with net metering. Reduce bills by 95%. Government subsidy available.',
    url: `${BASE_URL}/services/on-grid-solar`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'On Grid Solar System Ramanathapuram', item: `${BASE_URL}/services/on-grid-solar` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'On Grid Solar System Installation in Ramanathapuram',
  description: 'Professional on-grid solar system installation with net metering in Ramanathapuram, Tamil Nadu. Grid-tied solar systems for homes and businesses.',
  provider: { '@type': 'Organization', name: 'Sun Solar Power Systems', url: BASE_URL },
  areaServed: [{ '@type': 'City', name: 'Ramanathapuram' }, { '@type': 'State', name: 'Tamil Nadu' }],
}

export default function OnGridSolarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white">
        <section className="bg-gradient-to-b from-blue-50 to-white pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase">On Grid Solar System</p>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mt-2 leading-tight">
                  On Grid Solar System in <span className="text-primary-600">Ramanathapuram</span>
                </h1>
                <p className="text-lg text-dark-600 mt-4 leading-relaxed">
                  Switch to an on-grid solar system and start saving on electricity bills immediately. As the best solar company in Ramanathapuram, we install grid-tied solar systems with net metering that allow you to earn credits for excess power fed back to the grid. Ideal for homes and businesses with reliable grid connectivity.
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
                <Image src="/Ongrid.jpg" alt="On grid solar system installation in Ramanathapuram" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Benefits of On-Grid Solar System</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                { title: 'Net Metering Benefits', desc: 'Earn credits for excess power fed back to the grid, reducing your bills further.' },
                { title: 'Lower Upfront Cost', desc: 'No battery required, making on-grid systems more affordable than off-grid alternatives.' },
                { title: 'Government Subsidy', desc: 'Eligible for MNRE subsidy of up to 40% on residential on-grid installations.' },
                { title: 'Zero Electricity Bills', desc: 'Generate your own power during the day and drastically reduce monthly expenses.' },
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
            <h2 className="text-3xl font-bold text-dark-900 text-center">On-Grid Solar System Price in Ramanathapuram</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                { size: '1kW', price: '₹45,000 - ₹55,000', saving: '₹1,200/mo' },
                { size: '3kW', price: '₹1,20,000 - ₹1,50,000', saving: '₹3,600/mo' },
                { size: '5kW', price: '₹1,80,000 - ₹2,30,000', saving: '₹6,000/mo' },
                { size: '10kW', price: '₹3,50,000 - ₹4,50,000', saving: '₹12,000/mo' },
              ].map((item) => (
                <div key={item.size} className="p-6 bg-white border border-dark-200 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">{item.size}</div>
                  <p className="text-dark-500 text-sm">On-Grid System</p>
                  <p className="font-semibold text-dark-900 mt-3">{item.price}</p>
                  <p className="text-green-600 text-sm font-medium mt-1">Save {item.saving}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Ready to Go Solar?</h2>
            <p className="mt-3 text-primary-100">Get a free consultation and quote for your on-grid solar system in Ramanathapuram.</p>
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
                <p className="text-sm text-dark-600 mt-1">Battery backup for 24/7 power</p>
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
