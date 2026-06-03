'use client'

import React from 'react'
import { Phone } from 'lucide-react'

const ClickToCall = () => {
  return (
    <a
      href="tel:+917708001737"
      className="md:hidden fixed bottom-6 left-6 z-50 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-300 active:scale-95"
      aria-label="Call Sun Solar Power Systems"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}

export default React.memo(ClickToCall)
