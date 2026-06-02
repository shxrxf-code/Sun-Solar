'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Category', href: '/products' },
  { name: 'Projects', href: '/projects' },
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

  // Close mobile menu on route change
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
              <h1 className="font-poppins text-xl font-bold text-dark-900">Sun Solar</h1>
              <p className="text-xs text-dark-600 font-semibold">Power Systems</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 hover:text-primary-600 ${
                  pathname === link.href ? 'text-primary-600 font-semibold' : 'text-dark-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-5 py-2 rounded-lg font-medium shadow hover:bg-primary-700 transition-colors duration-200"
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

      <div
        className={`md:hidden bg-white border-t border-dark-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-10 xl:px-16 2xl:px-24 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-sm font-medium transition-colors hover:text-primary-600 ${
                pathname === link.href ? 'text-primary-600' : 'text-dark-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)
