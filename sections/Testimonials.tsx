'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, BadgeCheck, Quote } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Muthukumar',
    text: 'The solar installation process was smooth and professional. The team explained everything clearly and completed the work on schedule.',
  },
  {
    name: 'Sathish Kumar',
    text: 'Excellent workmanship and quality service. The system has been performing efficiently since installation.',
  },
  {
    name: 'Rajendran',
    text: 'Very satisfied with the overall experience. The team was responsive, knowledgeable, and delivered exactly as promised.',
  },
  {
    name: 'Karthikeyan',
    text: 'Professional installation and great customer support. I would highly recommend their services.',
  },
  {
    name: 'Mohamed Rafi',
    text: 'From consultation to completion, everything was handled professionally. The quality of work exceeded expectations.',
  },
]

const AVATAR_COLORS = [
  'from-primary-500 to-primary-700',
  'from-blue-500 to-blue-700',
  'from-amber-500 to-amber-700',
  'from-emerald-500 to-emerald-700',
  'from-violet-500 to-violet-700',
]

function getInitial(name: string) {
  return name.charAt(0).toUpperCase()
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const totalSlides = REVIEWS.length
  const itemsPerView = 1
  const maxIndex = Math.ceil(totalSlides / itemsPerView) - 1

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(Math.max(0, Math.min(index, maxIndex)))
  }, [current, maxIndex])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(next, 4500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPaused, next])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section className="relative bg-dark-900 overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-900/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary-400 font-semibold text-sm tracking-[0.2em] uppercase mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-poppins">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-white font-poppins">4.9</span>
            <span className="text-dark-400 text-sm">/ 5 Customer Rating</span>
          </div>
        </motion.div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {REVIEWS.slice(current, current + itemsPerView).map((review) => {
                  const colorIdx = REVIEWS.indexOf(review) % AVATAR_COLORS.length
                  return (
                    <div key={review.name} className="bg-dark-800/60 backdrop-blur-sm border border-dark-700/60 rounded-2xl p-8 md:p-10 shadow-2xl">
                      <div className="flex items-start gap-5 mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${AVATAR_COLORS[colorIdx]} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <span className="text-white text-xl font-bold font-poppins">{getInitial(review.name)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-white font-semibold text-lg font-poppins">{review.name}</h3>
                            <BadgeCheck className="w-4 h-4 text-primary-400 flex-shrink-0" />
                          </div>
                          <StarRating />
                        </div>
                        <Quote className="w-8 h-8 text-primary-500/20 flex-shrink-0 hidden sm:block" />
                      </div>

                      <p className="text-dark-300 text-base md:text-lg leading-relaxed">
                        &ldquo;{review.text}&rdquo;
                      </p>

                      <div className="mt-6 flex items-center gap-2 text-xs text-primary-400 font-medium">
                        <BadgeCheck className="w-4 h-4" />
                        Verified Customer
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-dark-700 hover:border-primary-500/50 transition-all duration-200 group"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 text-dark-400 group-hover:text-primary-400 transition-colors" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-primary-500 w-7'
                      : 'bg-dark-600 hover:bg-dark-500'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-center hover:bg-dark-700 hover:border-primary-500/50 transition-all duration-200 group"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 text-dark-400 group-hover:text-primary-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Testimonials)
