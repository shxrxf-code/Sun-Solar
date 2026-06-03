'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Search, Grid3X3, Filter, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/ui/Button'

type Category = 'all' | 'solar-panel' | 'water-heater' | 'water-pump' | 'on-grid' | 'off-grid' | 'street-light'

interface Project {
  id: string
  title: string
  category: Category
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
  { id: 'sp1', title: 'Residential Rooftop Solar Installation', category: 'solar-panel', image: '/images/works/sp1.webp' },
  { id: 'sp2', title: 'Rooftop Solar Array - Premium Home', category: 'solar-panel', image: '/images/works/sp2.webp' },
  { id: 'sp3', title: 'Commercial Solar Panel System', category: 'solar-panel', image: '/images/works/sp3.webp' },
  { id: 'sp4', title: 'Industrial Solar Power Setup', category: 'solar-panel', image: '/images/works/sp4.webp' },
  { id: 'sp6', title: 'Multi-Unit Residential Solar', category: 'solar-panel', image: '/images/works/sp6.webp' },
  { id: 'sp7', title: 'Large Scale Solar Installation', category: 'solar-panel', image: '/images/works/sp7.webp' },
  { id: 'solar-home', title: 'Home Solar Panel System', category: 'solar-panel', image: '/images/works/solar-home.webp' },
  { id: 'wh1', title: 'Residential Solar Water Heater', category: 'water-heater', image: '/images/works/wh1.webp' },
  { id: 'wh2', title: 'Home Solar Water Heating System', category: 'water-heater', image: '/images/works/wh2.webp' },
  { id: 'wh3', title: 'Commercial Solar Water Heater', category: 'water-heater', image: '/images/works/wh3.webp' },
  { id: 'wh4', title: 'High-Capacity Solar Water Heater', category: 'water-heater', image: '/images/works/wh4.webp' },
  { id: 'wp1', title: 'Agricultural Solar Water Pump', category: 'water-pump', image: '/images/works/wp1.webp' },
  { id: 'wp2', title: 'Farm Solar Pump Installation', category: 'water-pump', image: '/images/works/wp2.webp' },
  { id: 'wp3', title: 'Borewell Solar Pump System', category: 'water-pump', image: '/images/works/wp3.webp' },
  { id: 'wp4', title: 'Agricultural Field Solar Pump', category: 'water-pump', image: '/images/works/wp4.webp' },
  { id: 'og1', title: '5kW On-Grid Solar System', category: 'on-grid', image: '/images/works/og_service.webp' },
  { id: 'og2', title: 'On-Grid Solar Power Plant', category: 'on-grid', image: '/images/works/of_alt.webp' },
  { id: 'of1', title: 'Off-Grid Solar System with Battery', category: 'off-grid', image: '/images/works/solar-home.webp' },
  { id: 'of2', title: 'Off-Grid Solar for Rural Home', category: 'off-grid', image: '/images/works/of_alt.webp' },
  { id: 'sl1', title: 'Solar Street Light - Road Installation', category: 'street-light', image: '/images/works/sl1.webp' },
  { id: 'sl2', title: 'Solar Street Light - Public Area', category: 'street-light', image: '/images/works/sl2.webp' },
  { id: 'sl3', title: 'Solar Compound Light Installation', category: 'street-light', image: '/images/works/sl3.webp' },
  { id: 'sl4', title: 'Commercial Solar Street Lighting', category: 'street-light', image: '/images/works/sl4.webp' },
  { id: 'sl5', title: 'Solar LED Street Light System', category: 'street-light', image: '/images/works/sl_alt.webp' },
]

const stats = [
  { value: '1000+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Customer Satisfaction' },
]

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
    <main className="bg-white min-h-screen">
      <div className="w-full px-6 lg:px-12 xl:px-16 2xl:px-24 pt-24 sm:pt-32 pb-6 sm:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <span className="inline-block text-primary-600 font-semibold text-sm tracking-wide uppercase mb-2">Our Portfolio</span>
          <h1 className="font-poppins text-2xl sm:text-4xl lg:text-5xl font-bold text-dark-900 leading-tight">
            Real Solar Installations Across <span className="text-primary-600">Ramanathapuram</span>
          </h1>
          <p className="text-sm sm:text-lg text-dark-600 mt-2 sm:mt-4 max-w-2xl">
            Explore our completed residential, commercial, agricultural and industrial solar energy projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-3 gap-4 md:gap-6 mt-10 sm:mt-14 max-w-3xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-2xl sm:text-4xl font-bold text-primary-600 font-poppins">{stat.value}</div>
              <div className="text-xs sm:text-sm text-dark-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <section ref={gridRef} className="w-full px-6 lg:px-12 xl:px-16 2xl:px-24 pb-6 sm:pb-10">
        <div className="flex items-center justify-between mb-6 sm:mb-10">
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-dark-700 text-sm font-medium hover:bg-gray-200 transition-colors"
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
                  className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden"
                >
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      onClick={() => handleCategoryChange(cat.key)}
                      className={`block w-full text-left px-4 py-3 text-sm transition-colors ${
                        activeCategory === cat.key
                          ? 'bg-primary-50 text-primary-600 font-medium'
                          : 'text-dark-700 hover:bg-gray-50'
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

        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const actualIndex = projects.indexOf(project)
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => openLightbox(actualIndex)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative w-full" style={{ minHeight: '280px' }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm text-dark-800 text-xs font-medium rounded-lg shadow-sm">
                        {categories.find((c) => c.key === project.category)?.label || project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-poppins text-sm sm:text-base font-semibold leading-snug drop-shadow-sm">
                        {project.title}
                      </h3>
                    </div>
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
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full max-w-6xl max-h-screen flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="text-white/80 text-sm font-medium">
                  {lightboxIndex !== null ? `${lightboxIndex + 1} / ${filtered.length}` : ''}
                </div>
                <button
                  onClick={closeLightbox}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="relative flex-1 flex items-center justify-center">
                <button
                  onClick={goPrev}
                  className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <motion.div
                  key={filtered[lightboxIndex]?.id || lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-h-[85vh] flex items-center justify-center"
                >
                  <Image
                    src={filtered[lightboxIndex]?.image || ''}
                    alt={filtered[lightboxIndex]?.title || ''}
                    width={1600}
                    height={900}
                    className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg"
                    sizes="90vw"
                    priority
                  />
                </motion.div>

                <button
                  onClick={goNext}
                  className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="mt-4 text-center px-1">
                <p className="text-white font-semibold text-base sm:text-lg">
                  {filtered[lightboxIndex]?.title}
                </p>
                <p className="text-primary-400 text-xs sm:text-sm mt-1">
                  {categories.find((c) => c.key === filtered[lightboxIndex]?.category)?.label}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-primary-50">
        <div className="w-full px-6 lg:px-12 xl:px-16 2xl:px-24 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h2 className="font-poppins text-2xl sm:text-3xl font-semibold text-dark-900">
              Ready to Start Your Solar Project?
            </h2>
            <p className="text-sm sm:text-lg text-dark-600 mt-3 max-w-xl mx-auto">
              Get a free consultation and site inspection. Our team will design the perfect solar solution for your property.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a
                href="tel:+917708001737"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200 text-base"
              >
                Call +91 77080 01737
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
