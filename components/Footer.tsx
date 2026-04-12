import React from 'react'
import Link from 'next/link'
import { Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Logo + Tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="bg-primary-600 p-2 rounded-md">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">Sun Solar</span>
          </div>
          <p className="text-sm mt-3 text-gray-500 max-w-xs">
            Smart solar solutions for homes & businesses. Save energy, save money.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="relative hover:text-primary-400 after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary-400 after:transition-all transition">Home</Link>
          <Link href="/services" className="relative hover:text-primary-400 after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary-400 after:transition-all transition">Services</Link>
          <Link href="/projects" className="relative hover:text-primary-400 after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary-400 after:transition-all transition">Projects</Link>
          <Link href="/contact" className="relative hover:text-primary-400 after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-[1px] after:bg-primary-400 after:transition-all transition">Contact</Link>
        </div>

        {/* Right: Contact */}
        <div className="text-sm text-center md:text-right space-y-1">
          <p className="text-white font-medium">+91 98765 43210</p>
          <p>info@sunsolar.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dark-800"></div>

      {/* Bottom */}
      <div className="text-center py-4 text-xs text-gray-500">
        © 2024 Sun Solar Power Systems. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
