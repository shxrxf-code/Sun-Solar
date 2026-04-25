'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative w-full py-20 md:py-28 flex items-center justify-center text-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80"
          alt="Solar Panels"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white space-y-5">

        <h1 className="font-poppins text-4xl md:text-5xl font-semibold leading-tight">
          Reduce Your Electricity Bills by{" "}
          <span className="text-green-400">95% with Solar</span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-gray-200 leading-relaxed">
          Trusted by 1000+ customers. Government subsidy available.
          25-year performance warranty included.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
              Get Free Consultation
            </button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <span>✔ Govt Approved</span>
          <span>✔ 15+ Years Experience</span>
          <span>✔ 1000+ Installations</span>
        </div>

      </div>
    </section>
  )
}

export default Hero
