'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Users, Award, TrendingUp } from 'lucide-react'

const Stats = () => {
  const [counts, setCounts] = useState({
    installations: 0,
    customers: 0,
    years: 0,
    satisfaction: 0
  })

  useEffect(() => {
    const targets = { installations: 1000, customers: 2500, years: 15, satisfaction: 98 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounts({
        installations: Math.floor(targets.installations * progress),
        customers: Math.floor(targets.customers * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      })
      if (step >= steps) clearInterval(timer)
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { icon: Zap, label: 'Solar Installations', value: counts.installations, suffix: '+', color: 'text-primary-600' },
    { icon: Users, label: 'Happy Customers', value: counts.customers, suffix: '+', color: 'text-primary-600' },
    { icon: Award, label: 'Years Experience', value: counts.years, suffix: '+', color: 'text-primary-600' },
    { icon: TrendingUp, label: 'Customer Satisfaction', value: counts.satisfaction, suffix: '%', color: 'text-primary-600' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-primary-50 mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-dark-900 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-dark-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
    </section>
  )
}

export default Stats
