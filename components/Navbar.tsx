'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Our Works', href: '/our-works' },
  { name: 'Location', href: '/contact' },
  { name: 'Contact', href: '/contact' },
] as const

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
  }, [pathname])

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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 hover:text-primary-600 hover:bg-primary-50 ${
                  pathname === link.href ? 'text-primary-600 font-semibold' : 'text-dark-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-sm font-medium py-2 transition-colors hover:text-primary-600 ${
                    pathname === link.href ? 'text-primary-600' : 'text-dark-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
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
