'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award, Clock } from 'lucide-react'

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: '25-Year Warranty',
      description: 'Comprehensive warranty on all solar panels and inverters',
    },
    {
      icon: CheckCircle,
      title: 'Certified Installers',
      description: 'MNRE approved and trained installation team',
    },
    {
      icon: Award,
      title: 'Premium Brands',
      description: 'Top-tier panels from Tata, Adani, Waaree & more',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock maintenance and customer support',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Why Trust Sun Solar?
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            We deliver quality, reliability, and exceptional service with every installation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                <badge.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-2">{badge.title}</h3>
              <p className="text-dark-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
    </section>
  )
}

export default TrustBadges
