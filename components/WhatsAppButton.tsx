'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

const PHONE_NUMBER = '919514688030'
const MESSAGE = encodeURIComponent('Hi! I am interested in solar installation. Please provide more information.')

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}

export default React.memo(WhatsAppButton)
