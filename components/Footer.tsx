import React from 'react'
import Link from 'next/link'
import { Zap, Phone, MessageCircle, Mail } from 'lucide-react'
import Image from 'next/image'

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center gap-3 text-center">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/sunsolar-logo.png"
            alt="Sun Solar Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-white font-semibold text-sm">Sun Solar</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-3 text-xs">
          <Link href="/" className="hover:text-primary-400 transition">Home</Link>
          <span>•</span>
          <Link href="/services" className="hover:text-primary-400 transition">Services</Link>
          <span>•</span>
          <Link href="/projects" className="hover:text-primary-400 transition">Projects</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-primary-400 transition">Contact</Link>
        </div>

        {/* Contact */}
        <div className="text-xs space-y-1">
          <a href="https://wa.me/919489231133" className="text-white font-medium hover:text-primary-400 transition flex items-center justify-center gap-1">
            <MessageCircle className="w-3 h-3" />
            +91 94892 31133
          </a>
          <a href="tel:+917708001737" className="text-white font-medium hover:text-primary-400 transition flex items-center justify-center gap-1">
            <Phone className="w-3 h-3" />
            +91 77080 01737
          </a>
          <a href="mailto:sunsolarpowersystems@gmail.com" className="text-white font-medium hover:text-primary-400 transition flex items-center justify-center gap-1">
            <Mail className="w-3 h-3" />
            sunsolarpowersystems@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2024 Sun Solar
        </p>

      </div>
    </footer>
  )
})

export default Footer
