'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, Search, MapPin, Grid3X3, Filter } from 'lucide-react'
import Image from 'next/image'

type Category = 'all' | 'solar-panel' | 'water-heater' | 'water-pump' | 'on-grid' | 'off-grid' | 'street-light'

interface Project {
  id: string
  title: string
  category: Category
  location: string
  description: string
  image: string
}

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'solar-panel', label: 'Solar Panels' },
  { key: 'water-heater', label: 'Water Heaters' },
  { key: 'water-pump', label: 'Water Pumps' },
  { key: 'on-grid', label: 'On-Grid' },
  { key: 'off-grid', label: 'Off-Grid' },
  { key: 'street-light', label: 'Street Lights' },
]

const projects: Project[] = [
  { id: 'sp1', title: 'Residential Rooftop Solar Installation', category: 'solar-panel', location: 'Ramanathapuram', description: '5kW rooftop solar panel installation for a residential home with net metering connection.', image: '/images/works/sp1.webp' },
  { id: 'sp2', title: 'Rooftop Solar Array - Premium Home', category: 'solar-panel', location: 'Ramanathapuram', description: 'Complete rooftop solar array installation with monitoring system for a premium residence.', image: '/images/works/sp2.webp' },
  { id: 'sp3', title: 'Commercial Solar Panel System', category: 'solar-panel', location: 'Ramanathapuram', description: '10kW commercial solar panel installation for a local business with maximum energy savings.', image: '/images/works/sp3.webp' },
  { id: 'sp4', title: 'Industrial Solar Power Setup', category: 'solar-panel', location: 'Ramanathapuram', description: 'Large-scale industrial solar power system installation with high-efficiency panels.', image: '/images/works/sp4.webp' },
  { id: 'sp6', title: 'Multi-Unit Residential Solar', category: 'solar-panel', location: 'Ramanathapuram', description: 'Solar panel installation for a multi-unit residential apartment complex.', image: '/images/works/sp6.webp' },
  { id: 'sp7', title: 'Large Scale Solar Installation', category: 'solar-panel', location: 'Ramanathapuram', description: 'Large-scale solar panel project covering extensive rooftop area for maximum power generation.', image: '/images/works/sp7.webp' },
  { id: 'solar-home', title: 'Home Solar Panel System', category: 'solar-panel', location: 'Ramanathapuram', description: 'Complete home solar solution with battery backup and smart energy management.', image: '/images/works/solar-home.webp' },
  { id: 'wh1', title: 'Residential Solar Water Heater', category: 'water-heater', location: 'Ramanathapuram', description: '200LPD solar water heater installation for a family home with ETC tubes.', image: '/images/works/wh1.webp' },
  { id: 'wh2', title: 'Home Solar Water Heating System', category: 'water-heater', location: 'Ramanathapuram', description: 'Compact solar water heater system for residential use with zero running cost.', image: '/images/works/wh2.webp' },
  { id: 'wh3', title: 'Commercial Solar Water Heater', category: 'water-heater', location: 'Ramanathapuram', description: 'Large capacity solar water heating system for a commercial establishment.', image: '/images/works/wh3.webp' },
  { id: 'wh4', title: 'High-Capacity Solar Water Heater', category: 'water-heater', location: 'Ramanathapuram', description: '500LPD solar water heater installation for high-demand hot water requirements.', image: '/images/works/wh4.webp' },
  { id: 'wp1', title: 'Agricultural Solar Water Pump', category: 'water-pump', location: 'Ramanathapuram', description: 'Solar-powered irrigation pump for agricultural farm with subsidy benefits.', image: '/images/works/wp1.webp' },
  { id: 'wp2', title: 'Farm Solar Pump Installation', category: 'water-pump', location: 'Ramanathapuram', description: 'Submersible solar water pump for farmland irrigation with drip system.', image: '/images/works/wp2.webp' },
  { id: 'wp3', title: 'Borewell Solar Pump System', category: 'water-pump', location: 'Ramanathapuram', description: 'Solar borewell pump installation for agricultural water supply in remote areas.', image: '/images/works/wp3.webp' },
  { id: 'wp4', title: 'Agricultural Field Solar Pump', category: 'water-pump', location: 'Ramanathapuram', description: 'Complete solar water pumping solution for large agricultural fields.', image: '/images/works/wp4.webp' },
  { id: 'og1', title: '5kW On-Grid Solar System', category: 'on-grid', location: 'Ramanathapuram', description: 'Grid-tied 5kW solar power system with net metering for residential home.', image: '/images/works/og_service.webp' },
  { id: 'og2', title: 'On-Grid Solar Power Plant', category: 'on-grid', location: 'Ramanathapuram', description: 'Grid-connected solar power plant with bidirectional meter and export facility.', image: '/images/works/of_alt.webp' },
  { id: 'of1', title: 'Off-Grid Solar System with Battery', category: 'off-grid', location: 'Ramanathapuram', description: 'Complete off-grid solar system with battery storage for 24/7 power backup.', image: '/images/works/solar-home.webp' },
  { id: 'of2', title: 'Off-Grid Solar for Rural Home', category: 'off-grid', location: 'Ramanathapuram', description: 'Independent off-grid solar solution for rural home with no grid access.', image: '/images/works/of_alt.webp' },
  { id: 'sl1', title: 'Solar Street Light - Road Installation', category: 'street-light', location: 'Ramanathapuram', description: '20W automatic solar street light with dusk-to-dawn sensor for road lighting.', image: '/images/works/sl1.webp' },
  { id: 'sl2', title: 'Solar Street Light - Public Area', category: 'street-light', location: 'Ramanathapuram', description: 'Solar-powered LED street light with motion sensor for public spaces.', image: '/images/works/sl2.webp' },
  { id: 'sl3', title: 'Solar Compound Light Installation', category: 'street-light', location: 'Ramanathapuram', description: 'Solar lighting solution for residential compound with night-time illumination.', image: '/images/works/sl3.webp' },
  { id: 'sl4', title: 'Commercial Solar Street Lighting', category: 'street-light', location: 'Ramanathapuram', description: 'Complete solar street lighting system for commercial area with zero electricity cost.', image: '/images/works/sl4.webp' },
  { id: 'sl5', title: 'Solar LED Street Light System', category: 'street-light', location: 'Ramanathapuram', description: 'High-lumen solar LED street light installation for community roads.', image: '/images/works/sl_alt.webp' },
]

const stats = [
  { value: '1000+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Customer Satisfaction' },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export default function OurWorksPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev + 1) % filtered.length : null)
  }, [filtered.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null)
  }, [filtered.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, goNext, goPrev])

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat)
    setShowMobileFilter(false)
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="bg-dark-950 min-h-screen">
      <section className="relative pt-32 pb-20 md:pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/15 via-dark-950 to-dark-950 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <span className="inline-block text-primary-400 font-semibold text-sm tracking-[0.2em] uppercase mb-4">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight">
              Real Solar Installations Across <span className="text-primary-400">Ramanathapuram</span>
            </h1>
            <p className="text-dark-400 mt-4 max-w-2xl mx-auto text-lg">
              Explore our completed residential, commercial, agricultural and industrial solar energy projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-14 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 md:p-6 rounded-2xl bg-dark-800/50 border border-dark-700/50 backdrop-blur-sm">
                <div className="text-2xl md:text-4xl font-bold text-primary-400 font-poppins">{stat.value}</div>
                <div className="text-xs md:text-sm text-dark-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={gridRef} className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.key
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20'
                      : 'bg-dark-800/60 text-dark-300 border border-dark-700/50 hover:bg-dark-700 hover:text-white'
                  }`}
                >
                  {cat.key === 'all' ? <Grid3X3 className="w-4 h-4 inline mr-1.5 -mt-0.5" /> : null}
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="md:hidden relative">
              <button
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-800/60 text-dark-300 border border-dark-700/50 text-sm font-medium"
              >
                <Filter className="w-4 h-4" />
                {categories.find((c) => c.key === activeCategory)?.label || 'Filter'}
              </button>
              <AnimatePresence>
                {showMobileFilter && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-full mt-2 w-52 bg-dark-800 border border-dark-700 rounded-xl shadow-2xl z-20 overflow-hidden"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => handleCategoryChange(cat.key)}
                        className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                          activeCategory === cat.key
                            ? 'bg-primary-600/20 text-primary-400 font-medium'
                            : 'text-dark-300 hover:bg-dark-700'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="text-sm text-dark-500">
              <Search className="w-4 h-4 inline mr-1.5 -mt-0.5" />
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            </div>
          </div>

          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => {
                const actualIndex = projects.indexOf(project)
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="group relative bg-dark-800/40 border border-dark-700/50 rounded-2xl overflow-hidden hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
                  >
                    <div className="relative h-52 md:h-60 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-lg">
                          {categories.find((c) => c.key === project.category)?.label || project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-dark-400 text-xs mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </div>
                      <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-dark-400 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <button
                        onClick={() => openLightbox(actualIndex)}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        View Image
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-dark-500 text-lg">No projects found in this category.</div>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative flex-1 flex items-center justify-center">
                <button
                  onClick={goPrev}
                  className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <motion.div
                  key={filtered[lightboxIndex]?.id || lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-h-[75vh] aspect-video rounded-2xl overflow-hidden"
                >
                  <Image
                    src={filtered[lightboxIndex]?.image || ''}
                    alt={filtered[lightboxIndex]?.title || ''}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    priority
                  />
                </motion.div>

                <button
                  onClick={goNext}
                  className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-white font-semibold text-lg">
                  {filtered[lightboxIndex]?.title}
                </p>
                <p className="text-dark-400 text-sm mt-1">
                  {filtered[lightboxIndex]?.description}
                </p>
                <p className="text-dark-500 text-xs mt-2">
                  {lightboxIndex !== null ? `${lightboxIndex + 1} / ${filtered.length}` : ''}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section {...fadeUp} className="px-6 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-primary-600/10 via-dark-800 to-dark-800 border border-primary-500/20">
            <h2 className="text-2xl md:text-4xl font-bold text-white font-poppins">
              Ready to Start Your Solar Project?
            </h2>
            <p className="text-dark-400 mt-3 max-w-xl mx-auto">
              Get a free consultation and site inspection. Our team will design the perfect solar solution for your property.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/contact"
                className="px-8 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+917708001737"
                className="px-8 py-3 border border-dark-600 text-dark-200 rounded-xl font-semibold hover:bg-dark-700 transition-colors"
              >
                Call +91 77080 01737
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
