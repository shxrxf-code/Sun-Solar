import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'Solar Panel Installation in Ramanathapuram',
  description: 'Professional solar panel installation in Ramanathapuram by Sun Solar Power Systems. 1000+ installations, government subsidy support, 25-year warranty. Get free consultation today.',
  alternates: {
    canonical: `${BASE_URL}/services/solar-panel-installation`,
  },
  openGraph: {
    title: 'Solar Panel Installation in Ramanathapuram | Sun Solar Power Systems',
    description: 'Professional solar panel installation in Ramanathapuram. 1000+ installations, government subsidy, 25-year warranty. Free consultation.',
    url: `${BASE_URL}/services/solar-panel-installation`,
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Solar Panel Installation Ramanathapuram', item: `${BASE_URL}/services/solar-panel-installation` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Solar Panel Installation in Ramanathapuram',
  description: 'Professional rooftop solar panel installation services in Ramanathapuram, Tamil Nadu. Residential, commercial, and industrial installations with government subsidy support.',
  provider: {
    '@type': 'Organization',
    name: 'Sun Solar Power Systems',
    url: BASE_URL,
  },
  areaServed: [
    { '@type': 'City', name: 'Ramanathapuram' },
    { '@type': 'City', name: 'Rameswaram' },
    { '@type': 'City', name: 'Paramakudi' },
    { '@type': 'City', name: 'Keelakarai' },
    { '@type': 'City', name: 'Mudukulathur' },
    { '@type': 'State', name: 'Tamil Nadu' },
  ],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '45000',
    priceValidUntil: '2025-12-31',
  },
}

export default function SolarPanelInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main className="bg-white">
        <section className="bg-gradient-to-b from-primary-50 to-white pt-28 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary-600 font-semibold text-sm tracking-wide uppercase">Solar Panel Installation</p>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-900 mt-2 leading-tight">
                  Solar Panel Installation in <span className="text-primary-600">Ramanathapuram</span>
                </h1>
                <p className="text-lg text-dark-600 mt-4 leading-relaxed">
                  Sun Solar Power Systems is the leading solar company in Ramanathapuram, specializing in professional solar panel installation for residential, commercial, and industrial properties. With 15+ years of experience and 1000+ successful installations, we are the trusted choice for solar energy in Ramanathapuram district.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg">
                    Get Free Consultation
                  </Link>
                  <Link href="/blog/solar-panel-installation-guide-ramanathapuram" className="inline-flex items-center px-6 py-3 border border-dark-300 text-dark-700 rounded-lg font-semibold hover:bg-dark-50 transition-colors">
                    Read Guide
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image src="/Ongrid.jpg" alt="Solar panel installation in Ramanathapuram by Sun Solar Power Systems" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Why Choose Us for Solar Panel Installation in Ramanathapuram?</h2>
            <p className="text-dark-600 text-center mt-3 max-w-2xl mx-auto">We are the most trusted solar company in Ramanathapuram with proven expertise.</p>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
              {[
                { title: '1000+ Installations', desc: 'Proven track record across Ramanathapuram district and surrounding areas.' },
                { title: 'MNRE Empaneled', desc: 'Government-approved solar installer eligible for subsidy processing.' },
                { title: '25-Year Warranty', desc: 'Industry-leading performance warranty on all solar panel installations.' },
                { title: 'Free Site Inspection', desc: 'Complimentary site visit and customized solar design for your property.' },
                { title: 'Subsidy Assistance', desc: 'Complete support for government subsidy application and processing.' },
                { title: 'Professional Team', desc: 'Certified installers with 15+ years of solar industry experience.' },
              ].map((item) => (
                <div key={item.title} className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                  <h3 className="font-semibold text-lg text-dark-900">{item.title}</h3>
                  <p className="text-dark-600 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Our Solar Panel Installation Process</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                { step: '01', title: 'Consultation', desc: 'Free assessment of your energy needs and property.' },
                { step: '02', title: 'Site Survey', desc: 'Thorough inspection and structural analysis.' },
                { step: '03', title: 'Installation', desc: 'Professional setup completed in 3-5 days.' },
                { step: '04', title: 'Savings Start', desc: 'Enjoy reduced electricity bills from day one.' },
              ].map((item) => (
                <div key={item.step} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-600">{item.step}</div>
                  <h3 className="font-semibold text-lg text-dark-900 mt-2">{item.title}</h3>
                  <p className="text-dark-600 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-dark-900 text-center">Solar Panel Installation Cost in Ramanathapuram</h2>
            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                { size: '1kW', price: '₹45,000 - ₹55,000', afterSubsidy: '₹27,000 - ₹33,000' },
                { size: '3kW', price: '₹1,20,000 - ₹1,50,000', afterSubsidy: '₹72,000 - ₹90,000' },
                { size: '5kW', price: '₹1,80,000 - ₹2,30,000', afterSubsidy: '₹1,44,000 - ₹1,84,000' },
                { size: '10kW', price: '₹3,50,000 - ₹4,50,000', afterSubsidy: '₹3,15,000 - ₹4,05,000' },
              ].map((item) => (
                <div key={item.size} className="p-6 border border-dark-200 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary-600">{item.size}</div>
                  <p className="text-dark-500 text-sm mt-1">System</p>
                  <div className="mt-4">
                    <p className="text-dark-400 text-xs">Actual Price</p>
                    <p className="font-semibold text-dark-900">{item.price}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-green-600 text-xs font-medium">After Subsidy</p>
                    <p className="font-semibold text-green-700">{item.afterSubsidy}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="text-primary-600 font-semibold hover:text-primary-700">Get exact pricing for your property →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-primary-600 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">Ready to Install Solar Panels in Ramanathapuram?</h2>
            <p className="mt-3 text-primary-100">Get a free consultation and quote from Ramanathapuram&apos;s trusted solar company.</p>
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
              <Link href="/services/on-grid-solar" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">On Grid Solar System</h3>
                <p className="text-sm text-dark-600 mt-1">Connect to grid and earn from net metering</p>
              </Link>
              <Link href="/services/off-grid-solar" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">Off Grid Solar System</h3>
                <p className="text-sm text-dark-600 mt-1">Complete energy independence with battery backup</p>
              </Link>
              <Link href="/services/solar-water-heater" className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
                <h3 className="font-semibold text-dark-900">Solar Water Heater</h3>
                <p className="text-sm text-dark-600 mt-1">Free hot water with zero electricity cost</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
