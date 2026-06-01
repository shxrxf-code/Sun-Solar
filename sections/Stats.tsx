'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Users, Award, TrendingUp } from 'lucide-react'
import { useReducedMotion, fadeUp } from '@/hooks/useReducedMotion'

const STATS_DATA = [
  { icon: Zap, label: 'Solar Installations', target: 1000, suffix: '+', color: 'text-primary-600' },
  { icon: Users, label: 'Happy Customers', target: 2500, suffix: '+', color: 'text-primary-600' },
  { icon: Award, label: 'Years Experience', target: 15, suffix: '+', color: 'text-primary-600' },
  { icon: TrendingUp, label: 'Customer Satisfaction', target: 98, suffix: '%', color: 'text-primary-600' },
]

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const startTime = useRef<number | null>(null)
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    startTime.current = null

    const animate = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp
      const elapsed = timestamp - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(target * progress))

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate)
      }
    }

    rafId.current = requestAnimationFrame(animate)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [target, duration])

  return count
}

const StatCard = React.memo(function StatCard({
  stat,
  index,
  reduceMotion,
}: {
  stat: typeof STATS_DATA[number]
  index: number
  reduceMotion: boolean
}) {
  const count = useCountUp(stat.target)
  const anim = fadeUp(reduceMotion)

  return (
    <motion.div
      initial={anim.initial}
      whileInView={anim.whileInView}
      viewport={anim.viewport}
      transition={reduceMotion ? {} : { duration: 0.4, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="inline-flex p-4 rounded-2xl bg-primary-50 mb-4">
        <stat.icon className={`w-8 h-8 ${stat.color}`} />
      </div>
      <div className="text-4xl font-bold text-dark-900 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-dark-600 font-medium">{stat.label}</div>
    </motion.div>
  )
})

const Stats = () => {
  const { shouldReduceMotion } = useReducedMotion()

  return (
    <section className="py-16 bg-white content-visibility-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {STATS_DATA.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} reduceMotion={shouldReduceMotion} />
        ))}
      </div>
    </section>
  )
}

export default React.memo(Stats)
