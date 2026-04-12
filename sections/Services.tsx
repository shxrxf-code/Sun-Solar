'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Battery, Droplets, Waves, ArrowRight } from 'lucide-react'
import Card from '@/ui/Card'
import Button from '@/ui/Button'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: Sun,
      title: 'On-Grid Solar',
      description: 'Connected to the grid, export excess power, reduce bills significantly',
      features: ['Net metering', 'Grid backup', 'Low maintenance'],
      price: '₹45,000 - ₹60,000 per kW',
    },
    {
      icon: Battery,
      title: 'Off-Grid Solar',
      description: 'Complete independence from grid with battery backup system',
      features: ['Battery storage', 'Power backup', 'Remote locations'],
      price: '₹65,000 - ₹85,000 per kW',
    },
    {
      icon: Droplets,
      title: 'Solar Water Heaters',
      description: 'Eco-friendly water heating solutions for homes and businesses',
      features: ['300 days hot water', 'Zero electricity cost', '5-year warranty'],
      price: '₹15,000 - ₹35,000',
    },
    {
      icon: Waves,
      title: 'Solar Pumps',
      description: 'Agricultural and industrial water pumping powered by solar',
      features: ['No fuel cost', 'Low maintenance', 'Gov subsidy available'],
      price: '₹50,000 - ₹2,00,000',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Our Solar Solutions
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Complete solar energy solutions tailored for homes, businesses, and agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary-100 rounded-xl">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{service.title}</h3>
                <p className="text-dark-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-dark-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-sm font-semibold text-primary-600">{service.price}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="group">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
    </section>
  )
}

export default Services
