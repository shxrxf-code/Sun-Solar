'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
] as const

const serviceItems = [
  { name: 'Solar Panel Installation', href: '/services/solar-panel-installation', desc: 'Professional rooftop solar for homes & businesses', img: '/images/services/solar-panel-installation.webp' },
  { name: 'On Grid Solar', href: '/services/on-grid-solar', desc: 'Grid-tied system with net metering', img: '/images/services/on-grid-solar.webp' },
  { name: 'Off Grid Solar', href: '/services/off-grid-solar', desc: 'Energy independence with battery backup', img: '/images/services/off-grid-solar.webp' },
  { name: 'Solar Water Heater', href: '/services/solar-water-heater', desc: 'Free hot water with zero electricity cost', img: '/images/services/solar-water-heater.webp' },
  { name: 'Solar Water Pump', href: '/services/solar-water-pump', desc: 'Solar-powered irrigation for farms', img: '/images/services/solar-water-pump.webp' },
  { name: 'Solar Street Light', href: '/services/solar-street-light', desc: 'Automatic outdoor solar LED lighting', img: '/images/services/solar-street-light.webp' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const servicesLinkRef = useRef<HTMLAnchorElement>(null)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    setIsMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        servicesLinkRef.current &&
        !servicesLinkRef.current.contains(e.target as Node)
      ) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isOnServicesPage = pathname.startsWith('/services')

  return (
    <nav
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 will-change-transform ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
      }`}
    >
      <div className="w-full px-6 md:px-10 xl:px-16 2xl:px-24">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/sunsolar-logo.png"
              alt="Sun Solar Power Systems - Home"
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <div>
              <span className="font-poppins text-xl font-bold text-dark-900">Sun Solar</span>
              <p className="text-xs text-dark-600 font-semibold">Power Systems</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="relative">
                    <Link
                      ref={servicesLinkRef}
                      href={link.href}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsServicesOpen((prev) => !prev)
                      }}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-colors duration-200 hover:text-primary-600 hover:bg-primary-50 ${
                        isOnServicesPage ? 'text-primary-600 font-semibold' : 'text-dark-700'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          ref={dropdownRef}
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[700px] bg-white rounded-xl shadow-xl border border-gray-200 p-5"
                        >
                          <div className="grid grid-cols-3 gap-4">
                            {serviceItems.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className="group/card flex flex-col rounded-xl overflow-hidden border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-200"
                              >
                                <div className="relative h-28 overflow-hidden">
                                  <Image
                                    src={service.img}
                                    alt={service.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover/card:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                  <div className="absolute bottom-2 left-3 right-3">
                                    <h3 className="text-white font-semibold text-sm leading-tight">{service.name}</h3>
                                  </div>
                                </div>
                                <div className="p-3 flex flex-col flex-1 bg-white">
                                  <p className="text-xs text-dark-500 leading-relaxed flex-1">{service.desc}</p>
                                  <span className="text-xs font-semibold text-primary-600 mt-2 inline-flex items-center gap-1 group-hover/card:gap-2 transition-all">
                                    Learn More <ChevronRight className="w-3 h-3" />
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 hover:text-primary-600 hover:bg-primary-50 ${
                    pathname === link.href ? 'text-primary-600 font-semibold' : 'text-dark-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              href="/contact"
              className="ml-2 bg-primary-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-primary-700 transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-dark-900" />
            ) : (
              <Menu className="w-6 h-6 text-dark-900" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-dark-200 overflow-hidden"
          >
            <div className="px-6 md:px-10 xl:px-16 2xl:px-24 py-4 space-y-1">
              {navLinks.map((link) => {
                if (link.name === 'Services') {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex items-center justify-between w-full text-sm font-medium py-2 transition-colors hover:text-primary-600 ${
                          isOnServicesPage ? 'text-primary-600' : 'text-dark-700'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1 border-l-2 border-primary-200 ml-2 mt-1">
                              {serviceItems.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`block text-sm py-1.5 pl-3 transition-colors hover:text-primary-600 ${
                                    pathname === service.href ? 'text-primary-600 font-medium' : 'text-dark-600'
                                  }`}
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-sm font-medium py-2 transition-colors hover:text-primary-600 ${
                      pathname === link.href ? 'text-primary-600' : 'text-dark-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors mt-3"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default React.memo(Navbar)
