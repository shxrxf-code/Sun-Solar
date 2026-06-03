import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'Solar Water Heater Installation in Ramanathapuram',
  description: 'Best solar water heater installation in Ramanathapuram. ETC and FPC systems with zero electricity cost. 300 days of hot water, 5-year warranty. Free consultation.',
  alternates: {
    canonical: `${BASE_URL}/services/solar-water-heater`,
  },
  openGraph: {
    title: 'Solar Water Heater in Ramanathapuram | Sun Solar Power Systems',
    description: 'Solar water heater installation in Ramanathapuram. Zero electricity cost, 300 days hot water, 5-year warranty.',
    url: `${BASE_URL}/services/solar-water-heater`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Solar Water Heater Ramanathapuram', item: `${BASE_URL}/services/solar-water-heater` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Solar Water Heater Installation in Ramanathapuram',
  description: 'Professional solar water heater installation in Ramanathapuram, Tamil Nadu. ETC and FPC systems for homes, hotels, hospitals, and industries.',
  provider: { '@type': 'Organization', name: 'Sun Solar Power Systems', url: BASE_URL },
  areaServed: [{ '@type': 'City', name: 'Ramanathapuram' }, { '@type': 'State', name: 'Tamil Nadu' }],
}

export default function SolarWaterHeaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white">
        <section className="bg-gradient-to-b from-orange-50 to-white pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase">Solar Water Heater</p>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mt-2 leading-tight">
                  Solar Water Heater in <span className="text-primary-600">Ramanathapuram</span>
                </h1>
                <p className="text-lg text-dark-600 mt-4 leading-relaxed">
                  Get unlimited hot water with zero electricity cost. Sun Solar Power Systems installs high-quality ETC and FPC solar water heaters across Ramanathapuram district. Perfect for homes, hotels, hospitals, and industries looking to reduce energy costs.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                    Get Free Consultation
                  </Link>
                  <Link href="/blog/solar-water-heater-benefits-ramanathapuram" className="inline-flex items-center px-6 py-3 border border-dark-300 text-dark-700 rounded-lg font-semibold hover:bg-dark-50 transition-colors">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image src="/solar-water-heater.jpg" alt="Solar water heater installation in Ramanathapuram" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Benefits of Solar Water Heaters</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {[
                { title: 'Zero Running Cost', desc: 'Free hot water using solar energy. No electricity or fuel required.' },
                { title: '300 Days of Hot Water', desc: 'Reliable performance in Ramanathapuram tropical climate throughout the year.' },
                { title: '5-Year Warranty', desc: 'Comprehensive warranty on solar water heater and installation.' },
                { title: 'Eco-Friendly', desc: 'Reduce carbon footprint by switching to renewable solar energy for water heating.' },
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
            <h2 className="text-3xl font-bold text-dark-900 text-center">Solar Water Heater Price in Ramanathapuram</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                { size: '100 LPD', price: '₹18,000 - ₹25,000', use: '2-3 people' },
                { size: '200 LPD', price: '₹30,000 - ₹40,000', use: '4-5 people' },
                { size: '300 LPD', price: '₹40,000 - ₹55,000', use: '6-8 people' },
                { size: '500 LPD', price: '₹65,000 - ₹85,000', use: 'Commercial' },
              ].map((item) => (
                <div key={item.size} className="p-6 bg-white border border-dark-200 rounded-xl text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">{item.size}</div>
                  <p className="text-dark-500 text-sm">Capacity</p>
                  <p className="font-semibold text-dark-900 mt-3">{item.price}</p>
                  <p className="text-dark-500 text-sm mt-1">For {item.use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Get Free Hot Water from the Sun</h2>
            <p className="mt-3 text-primary-100">Contact us for a free consultation and quote for solar water heater installation in Ramanathapuram.</p>
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
                <p className="text-sm text-dark-600 mt-1">Complete solar power solutions</p>
              </Link>
              <Link href="/services/on-grid-solar" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">On Grid Solar System</h3>
                <p className="text-sm text-dark-600 mt-1">Reduce electricity bills by 95%</p>
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
