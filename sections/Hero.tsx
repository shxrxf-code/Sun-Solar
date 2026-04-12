'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-primary-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 2xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <h1 className="font-poppins text-3xl md:text-5xl font-bold text-dark-900 leading-tight">
            Save up to <span className="text-primary-600">80%</span> on Electricity
          </h1>

          <p className="mt-4 text-dark-600 text-base md:text-lg">
            Switch to solar with government subsidy & 25-year warranty.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md">
                Get Free Consultation
              </button>
            </Link>
            <Link href="/calculator" className="w-full sm:w-auto">
              <button className="w-full border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                Calculate Savings
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-dark-100">
          <p className="text-sm text-dark-600">Monthly Savings</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mt-2">
            ₹8,500
          </h2>
          <p className="text-sm text-dark-600 mt-1">Average for 5kW system</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-xl font-semibold text-dark-900">5–6</p>
              <p className="text-xs text-dark-600">Years Payback</p>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-xl font-semibold text-dark-900">40%</p>
              <p className="text-xs text-dark-600">Gov Subsidy</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
