import { Metadata } from 'next'
import { ArrowRight, TrendingUp, Calendar, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://www.sunsolar.com'

export const metadata: Metadata = {
  title: 'Solar Projects & Case Studies',
  description: 'Real solar installation projects with verified savings data. See how residential, commercial, and agricultural clients save ₹30,000 to ₹17,40,000 annually.',
  alternates: {
    canonical: `${BASE_URL}/projects`,
  },
  openGraph: {
    title: 'Solar Projects & Case Studies | Sun Solar Power Systems',
    description: 'Real solar installation projects with verified savings data across India.',
    url: `${BASE_URL}/projects`,
  },
}

const projects = [
  { id: 1, title: 'Residential Solar Installation', size: '5kW On-Grid', beforeBill: '₹8,500/month', afterBill: '₹1,200/month', savings: '₹88,000/year', roi: '4.5 years', image: '/Ongrid.jpg', description: 'Complete rooftop solar installation for a 3BHK apartment. System includes premium Tata Power Solar panels with 25-year warranty.' },
  { id: 2, title: 'Commercial Solar Installation', size: '25kW On-Grid', beforeBill: '₹45,000/month', afterBill: '₹8,000/month', savings: '₹4,44,000/year', roi: '4 years', image: '/Agri-2.jpeg', description: 'Large-scale commercial installation for a software company. System designed to handle peak load requirements with net metering.' },
  { id: 3, title: 'Industrial Solar Installation', size: '100kW On-Grid', beforeBill: '₹1,80,000/month', afterBill: '₹35,000/month', savings: '₹17,40,000/year', roi: '3.5 years', image: '/Agri-3.jpg', description: 'Industrial solar installation for a textile manufacturing unit. Custom-designed system to reduce operational costs significantly.' },
  { id: 4, title: 'Solar Water Heater System', size: '300LPD System', beforeBill: '₹2,500/month', afterBill: '₹0/month', savings: '₹30,000/year', roi: '2 years', image: '/solar-water-heater.jpg', description: 'ETC type solar water heater for a villa. Provides hot water for 300 liters daily with zero electricity cost.' },
  { id: 5, title: 'Agricultural Solar Pump', size: '10HP Solar Pump', beforeBill: '₹15,000/month (diesel)', afterBill: '₹0/month', savings: '₹1,80,000/year', roi: '3 years', image: '/Agri-1.png', description: 'AC solar pump for irrigation. Replaced diesel pump, completely eliminating fuel costs and reducing carbon footprint.' },
  { id: 6, title: 'Hybrid Solar System', size: '10kW Hybrid', beforeBill: '₹18,000/month', afterBill: '₹3,500/month', savings: '₹1,74,000/year', roi: '5 years', image: '/Offgrid.jpg', description: 'Hybrid system with battery backup for a luxury villa. Provides power during outages while maximizing savings through net metering.' },
]

const stats = [
  { label: 'Total Savings', value: '₹9Cr+', icon: TrendingUp },
  { label: 'Projects Delivered', value: '1000+', icon: Zap },
  { label: 'Avg. ROI Period', value: '3.5 Yrs', icon: Calendar },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${BASE_URL}/projects#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Solar Projects', item: `${BASE_URL}/projects` },
  ],
}

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section id="projects" className="pt-28 pb-24 bg-white">
        <div className="w-full px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mb-16">
            <div className="w-12 h-1 bg-primary-500 rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight tracking-tight">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-dark-500 mt-4 max-w-2xl leading-relaxed">
              Real installations, real results. Explore our portfolio of successful solar projects across residential, commercial, and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-16 py-8 border-y border-dark-100">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-3 md:gap-4">
                  <div className="p-2.5 rounded-xl bg-primary-50 flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold text-dark-900">{stat.value}</p>
                    <p className="text-xs md:text-sm text-dark-500">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl border border-dark-100 shadow-sm overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 will-change-transform"
              >
                <div className="relative h-56 md:h-60 xl:h-64 overflow-hidden bg-dark-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.size} solar installation case study`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/95 backdrop-blur-sm text-dark-900 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                      {project.size}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary-500/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                      <Zap className="w-3 h-3" aria-hidden="true" />
                      {project.roi} ROI
                    </span>
                  </div>
                </div>

                <div className="p-6 lg:p-7 xl:p-8 flex flex-col">
                  <h2 className="text-lg lg:text-xl font-bold text-dark-900 leading-snug group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h2>

                  <p className="text-sm text-dark-500 mt-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-dark-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-dark-400 font-medium uppercase tracking-wider">Annual Savings</p>
                        <p className="text-base lg:text-lg font-bold text-primary-600 mt-0.5">{project.savings}</p>
                      </div>
                      <div>
                        <p className="text-xs text-dark-400 font-medium uppercase tracking-wider">Payback Period</p>
                        <p className="text-base lg:text-lg font-bold text-dark-900 mt-0.5">{project.roi}</p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-dark-900 text-white text-sm font-semibold hover:bg-primary-600 transition-colors duration-200 group/btn"
                    aria-label={`Get similar savings as ${project.title}`}
                  >
                    Get Similar Savings
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="w-full px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-1 bg-primary-500 rounded-full mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 leading-tight tracking-tight">
              Want Similar Savings?
            </h2>
            <p className="text-lg text-dark-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Get a free consultation and discover how much you can save with solar. Our experts will design the perfect system for your needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl text-base font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              </Link>
              <Link href="/services">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-900 rounded-xl text-base font-semibold border border-dark-200 hover:border-dark-300 transition-colors duration-200 shadow-sm">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
