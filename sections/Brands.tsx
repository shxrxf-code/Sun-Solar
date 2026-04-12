'use client'

import React from 'react'

const Brands = () => {
  const brands = [
    { name: 'Waaree', logo: '/brands/waaree.png' },
    { name: 'Adani Solar', logo: '/brands/adani.png' },
    { name: 'Growatt', logo: '/brands/growatt.png' },
    { name: 'Polycab Solar', logo: '/brands/polycab.png' },
    { name: 'Hykon', logo: '/brands/hykon.png' },
    { name: 'Eaton', logo: '/brands/eaton.png' },
    { name: 'Tribox', logo: '/brands/tribox.png' },
    { name: 'Exide Solar', logo: '/brands/exide.png' },
    { name: 'UTL Solar', logo: '/brands/utl.png' },
    { name: 'BlackBox Solar', logo: '/brands/blackbox.png' },
    { name: 'Vikram Solar', logo: '/brands/vikram.png' },
  ]

  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="text-center mb-10 px-6 md:px-10 xl:px-16 2xl:px-24">
        <h2 className="text-2xl font-semibold text-dark-900">Trusted Premium Brands</h2>
        <p className="text-dark-600 text-sm mt-2">
          We partner with India's leading solar manufacturers
        </p>
      </div>

      {/* Scroller */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scroll container */}
        <div className="flex animate-scroll gap-20 items-center">
          {/* Repeat logos twice for infinite loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              {brands.map((brand) => (
                <div key={brand.name} className="w-40 h-24 flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-14 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
