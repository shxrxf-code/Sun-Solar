'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'
import Button from '@/ui/Button'
import Card from '@/ui/Card'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Tier-1 Solar Panel 540W',
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop',
    description: 'High-efficiency monocrystalline solar panels with 21% efficiency rate.',
    specs: { watt: '540W', efficiency: '21%', warranty: '25 years' },
    price: '₹18,000 - ₹22,000',
  },
  {
    id: 2,
    name: 'Solar Inverter 5kW',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Pure sine wave inverter with MPPT technology for optimal performance.',
    specs: { watt: '5kW', efficiency: '97%', warranty: '5 years' },
    price: '₹35,000 - ₹45,000',
  },
  {
    id: 3,
    name: 'Lithium Battery 5kWh',
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c71?w=400&h=300&fit=crop',
    description: 'Long-lasting lithium battery with 10-year lifespan and smart BMS.',
    specs: { watt: '5kWh', efficiency: '95%', warranty: '10 years' },
    price: '₹1,50,000 - ₹1,80,000',
  },
  {
    id: 4,
    name: 'Solar Water Pump 2HP',
    category: 'pumps',
    image: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a6?w=400&h=300&fit=crop',
    description: 'AC/DC compatible solar pump for irrigation and agricultural use.',
    specs: { watt: '2HP', efficiency: '40%', warranty: '2 years' },
    price: '₹25,000 - ₹30,000',
  },
  {
    id: 5,
    name: 'Tier-1 Solar Panel 450W',
    category: 'panels',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop',
    description: 'Compact high-efficiency panels perfect for residential installations.',
    specs: { watt: '450W', efficiency: '20%', warranty: '25 years' },
    price: '₹15,000 - ₹18,000',
  },
  {
    id: 6,
    name: 'Solar Inverter 3kW',
    category: 'inverters',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    description: 'Compact inverter for small homes with WiFi monitoring.',
    specs: { watt: '3kW', efficiency: '96%', warranty: '5 years' },
    price: '₹25,000 - ₹32,000',
  },
  {
    id: 7,
    name: 'Lead Acid Battery 150Ah',
    category: 'batteries',
    image: 'https://images.unsplash.com/photo-1546265487-66c4a43b0549?w=400&h=300&fit=crop',
    description: 'Tubular battery with deep discharge capability for off-grid systems.',
    specs: { watt: '150Ah', efficiency: '85%', warranty: '5 years' },
    price: '₹12,000 - ₹15,000',
  },
  {
    id: 8,
    name: 'Submersible Solar Pump 5HP',
    category: 'pumps',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
    description: 'High-capacity pump for deep wells and large irrigation needs.',
    specs: { watt: '5HP', efficiency: '45%', warranty: '2 years' },
    price: '₹45,000 - ₹55,000',
  },
]

const categories = ['All', 'Panels', 'Inverters', 'Batteries', 'Pumps']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="w-full px-8 xl:px-16 2xl:px-24 pt-32 pb-12">
        <h1 className="font-poppins text-4xl font-semibold text-dark-900">
          Our Solar Products
        </h1>
        <p className="text-lg text-dark-600 mt-4 max-w-xl">
          High-quality solar solutions for homes and businesses
        </p>
      </div>

      {/* Category Filter */}
      <div className="w-full px-8 xl:px-16 2xl:px-24 pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full px-8 xl:px-16 2xl:px-24 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="group h-full overflow-hidden border border-transparent group-hover:border-primary-200 shadow-sm hover:shadow-xl hover:shadow-primary-100 transition-all duration-300 transform hover:-translate-y-2">
                <div className="overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-poppins text-lg font-semibold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-dark-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Power:</span>
                      <span className="font-medium text-dark-900">{product.specs.watt}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Efficiency:</span>
                      <span className="font-medium text-dark-900">{product.specs.efficiency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Warranty:</span>
                      <span className="font-medium text-dark-900">{product.specs.warranty}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-primary-600 font-semibold text-sm">
                      {product.price}
                    </span>
                    <Link href="/contact">
                      <Button size="sm" className="group-hover:scale-[1.03] transition-transform">
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50">
        <div className="w-full px-8 xl:px-16 2xl:px-24 py-16 text-center">
          <h2 className="font-poppins text-3xl font-semibold text-dark-900 mb-4">
            Not sure which product is right for you?
          </h2>
          <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
            Our experts can help you choose the perfect solar solution based on your energy needs and budget.
          </p>
          <Link href="/contact">
            <Button size="lg" className="group">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
