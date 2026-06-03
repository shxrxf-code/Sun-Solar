import React from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, Mail, MapPin, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const Footer = React.memo(function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/sunsolar-logo.png" alt="Sun Solar Power Systems" width={40} height={40} className="h-10 w-auto" />
              <div>
                <span className="text-white font-semibold text-base">Sun Solar</span>
                <p className="text-xs text-gray-500">Power Systems</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Leading solar company in Ramanathapuram since 2009. 1000+ successful installations with government subsidy support.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/919489231133" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              <a href="tel:+917708001737" className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Phone">
                <Phone className="w-4 h-4 text-white" />
              </a>
              <a href="mailto:sunsolarpowersystems@gmail.com" className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors" aria-label="Email">
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Home</Link></li>
              <li><Link href="/services" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Services</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Products</Link></li>
              <li><Link href="/projects" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Projects</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/solar-panel-installation" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Solar Panel Installation</Link></li>
              <li><Link href="/services/on-grid-solar" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> On Grid Solar</Link></li>
              <li><Link href="/services/off-grid-solar" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Off Grid Solar</Link></li>
              <li><Link href="/services/solar-water-heater" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Solar Water Heater</Link></li>
              <li><Link href="/services/solar-water-pump" className="hover:text-primary-400 transition flex items-center gap-1"><ChevronRight className="w-3 h-3" /> Solar Water Pump</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Main Road, Near Bus Stand,<br />
                  Ramanathapuram, Tamil Nadu 623501
                </span>
              </li>
              <li>
                <a href="tel:+917708001737" className="flex items-center gap-2 hover:text-primary-400 transition">
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span>+91 77080 01737</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919489231133" className="flex items-center gap-2 hover:text-primary-400 transition">
                  <MessageCircle className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span>+91 94892 31133</span>
                </a>
              </li>
              <li>
                <a href="mailto:sunsolarpowersystems@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span className="text-sm break-all">sunsolarpowersystems@gmail.com</span>
                </a>
              </li>
            </ul>
            <a
              href="https://maps.google.com/?q=Sun+Solar+Power+Systems+Ramanathapuram+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs text-primary-400 hover:text-primary-300 transition"
            >
              <MapPin className="w-3 h-3" /> View on Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2025 Sun Solar Power Systems. All rights reserved.</p>
          <p>Solar Company in Ramanathapuram | Tamil Nadu</p>
        </div>
      </div>
    </footer>
  )
})

export default Footer
