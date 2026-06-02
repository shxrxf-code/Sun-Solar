import { Metadata } from 'next'
import { ArrowRight, TrendingUp, Calendar, Zap, ShieldCheck, Leaf, MapPin, Star, BadgeCheck, Ruler, Sun } from 'lucide-react'
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
  {
    id: 1,
    title: 'Residential Solar Installation',
    type: 'Residential',
    size: '5kW On-Grid',
    location: 'New Delhi',
    image: '/Ongrid.jpg',
    description: 'Complete rooftop solar installation for a 3BHK apartment using premium Tata Power Solar panels with 25-year warranty and net metering support.',
    highlights: ['3BHK Apartment', 'Rooftop Installation', 'Net Metering Enabled'],
    benefits: ['Zero electricity bills during daytime', 'Government subsidy applied', 'Grid-independent power backup'],
  },
  {
    id: 2,
    title: 'Commercial Solar Installation',
    type: 'Commercial',
    size: '25kW On-Grid',
    location: 'Gurugram',
    image: '/Agri-2.jpeg',
    description: 'Large-scale commercial installation for a software company with custom peak load management and net metering integration for maximum operational savings.',
    highlights: ['Software Company', 'Peak Load Management', 'Corporate Campus'],
    benefits: ['Reduced operational overhead', 'Tax benefits under accelerated depreciation', 'Green building certification support'],
  },
  {
    id: 3,
    title: 'Industrial Solar Installation',
    type: 'Industrial',
    size: '100kW On-Grid',
    location: 'Faridabad',
    image: '/Agri-3.jpg',
    description: 'Industrial solar installation for a textile manufacturing unit with a custom-designed system engineered to handle high continuous loads while reducing operational costs.',
    highlights: ['Textile Manufacturing', 'High-Voltage System', 'Heavy Load'],
    benefits: ['Significant operational cost reduction', '25-year performance guarantee', 'Custom-engineered mounting structure'],
  },
  {
    id: 4,
    title: 'Solar Water Heater System',
    type: 'Residential',
    size: '300LPD System',
    location: 'Noida',
    image: '/solar-water-heater.jpg',
    description: 'ETC type solar water heater for a luxury villa providing 300 liters of hot water daily with zero electricity cost throughout the year.',
    highlights: ['Luxury Villa', 'ETC Technology', 'Zero-Running Cost'],
    benefits: ['Unlimited hot water year-round', '5-year product warranty', 'Eco-friendly sustainable solution'],
  },
  {
    id: 5,
    title: 'Agricultural Solar Pump',
    type: 'Agricultural',
    size: '10HP Solar Pump',
    location: 'Hapur',
    image: '/Agri-1.png',
    description: 'High-capacity AC solar pump replacing diesel-powered irrigation, completely eliminating fuel costs while reducing the farm carbon footprint.',
    highlights: ['Diesel Replacement', 'Farm Irrigation', 'Automatic Operation'],
    benefits: ['Zero diesel fuel costs', 'Government subsidy eligible', 'Automated irrigation scheduling'],
  },
  {
    id: 6,
    title: 'Hybrid Solar System',
    type: 'Residential',
    size: '10kW Hybrid',
    location: 'Ghaziabad',
    image: '/Offgrid.jpg',
    description: 'Premium hybrid solar system with lithium battery backup for a luxury villa, providing uninterrupted power during outages while maximizing savings through net metering.',
    highlights: ['Luxury Villa', 'Battery Backup', '24/7 Power'],
    benefits: ['Complete power backup solution', 'Smart energy management', 'Seamless grid-battery switching'],
  },
]

const stats = [
  { label: 'Total Savings Generated', value: '₹9Cr+', icon: TrendingUp },
  { label: 'Projects Delivered', value: '1000+', icon: Zap },
  { label: 'Avg. Payback Period', value: '3.5 Yrs', icon: Calendar },
]

const typeColors: Record<string, string> = {
  Residential: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Commercial: 'bg-blue-50 text-blue-700 border-blue-200',
  Industrial: 'bg-violet-50 text-violet-700 border-violet-200',
  Agricultural: 'bg-amber-50 text-amber-700 border-amber-200',
}

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
          <div className="max-w-4xl mb-12">
            <div className="w-12 h-1 bg-primary-500 rounded-full mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 leading-tight tracking-tight">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-dark-500 mt-4 max-w-2xl leading-relaxed">
              Explore our portfolio of premium solar installations across residential, commercial, industrial, and agricultural sectors.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-14 py-8 border-y border-dark-100">
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
            {projects.map((project) => {
              const typeColorClass = typeColors[project.type] || 'bg-gray-50 text-gray-700 border-gray-200'
              return (
                <article
                  key={project.id}
                  className="group bg-white rounded-2xl border border-dark-100 shadow-sm overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 will-change-transform flex flex-col h-full"
                >
                  <div className="relative h-56 md:h-60 xl:h-64 overflow-hidden bg-dark-100 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.size} solar installation case study in ${project.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-dark-900 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                        <Ruler className="w-3 h-3 text-primary-600" aria-hidden="true" />
                        {project.size}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm border ${typeColorClass}`}>
                        <Zap className="w-3 h-3" aria-hidden="true" />
                        {project.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-dark-900 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                        <MapPin className="w-3 h-3 text-primary-600" aria-hidden="true" />
                        {project.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 lg:p-7 xl:p-8 flex flex-col flex-grow">
                    <h2 className="text-xl lg:text-2xl font-bold text-dark-900 leading-snug group-hover:text-primary-600 transition-colors duration-200">
                      {project.title}
                    </h2>

                    <p className="text-sm text-dark-500 mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.highlights.map((hl) => (
                          <span key={hl} className="inline-flex items-center gap-1 text-xs font-medium text-dark-600 bg-dark-50 px-2.5 py-1 rounded-md">
                            <Star className="w-3 h-3 text-primary-500" aria-hidden="true" />
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {project.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-dark-600">
                          <BadgeCheck className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 pt-5 border-t border-dark-100">
                      <div className="flex items-center gap-3 text-xs text-dark-500">
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-primary-500" aria-hidden="true" />
                          25-Yr Warranty
                        </span>
                        <span className="flex items-center gap-1">
                          <Leaf className="w-3.5 h-3.5 text-primary-500" aria-hidden="true" />
                          Eco-Friendly
                        </span>
                        <span className="flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5 text-primary-500" aria-hidden="true" />
                          MNRE Approved
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto pt-5">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 group/btn"
                        aria-label={`Get free consultation for ${project.title}`}
                      >
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
        <div className="w-full px-6 lg:px-10 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-1 bg-primary-500 rounded-full mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 leading-tight tracking-tight">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-lg text-dark-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Get a free consultation and discover the perfect solar solution for your home or business. Our experts are ready to help.
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
