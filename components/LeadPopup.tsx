'use client'

import React, { useState, useEffect } from 'react'
import { X, Zap } from 'lucide-react'
import Button from '@/ui/Button'

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-md w-full relative transform transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="text-center mb-6">
          <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-primary-600" />
          </div>
          <h3 className="text-2xl font-bold text-dark-900 mb-2">
            Get Free Solar Consultation
          </h3>
          <p className="text-gray-600">
            Limited subsidy available! Get expert advice within 24 hours.
          </p>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            required
          />
          <input
            type="text"
            placeholder="Your Location"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            required
          />
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
            required
          >
            <option value="">Select Requirement</option>
            <option value="residential">Residential Solar</option>
            <option value="commercial">Commercial Solar</option>
            <option value="industrial">Industrial Solar</option>
            <option value="water-heater">Solar Water Heater</option>
            <option value="pump">Solar Pump</option>
          </select>
          <Button className="w-full" size="lg">
            Get Free Consultation
          </Button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          By submitting, you agree to our privacy policy.
        </p>
      </div>
    </div>
  )
}

export default React.memo(LeadPopup)
