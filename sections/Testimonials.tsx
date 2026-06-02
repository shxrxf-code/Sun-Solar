'use client'

import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Star, X, CheckCircle } from 'lucide-react'
import { useReducedMotion, fadeUp } from '@/hooks/useReducedMotion'

interface Review {
  name: string
  location: string
  text: string
  image?: string
  savings?: string
}

const INITIAL_REVIEWS: Review[] = [
  { name: 'Mohamed Ibrahim', location: 'Keelakarai', text: 'Professional installation and excellent customer support. My EB bill has reduced considerably after switching to solar.', savings: '₹4,200/month' },
  { name: 'Meenakshi', location: 'Ramanathapuram', text: 'Very happy with the solar system performance. The installation process was smooth and hassle-free from start to finish.', savings: '₹3,500/month' },
  { name: 'Karthikeyan', location: 'Paramakudi', text: 'Best investment for my home. The system is performing perfectly even during peak summer and saving money every month.', savings: '₹5,100/month' },
  { name: 'Fathima', location: 'Erwadi', text: 'The team explained everything clearly in Tamil and completed the installation on time. Great after-sales support.', savings: '₹2,800/month' },
  { name: 'Senthil Kumar', location: 'Rameswaram', text: 'The team guided us through the entire subsidy process smoothly. Solar is working efficiently and we are very satisfied.', savings: '₹4,200/month' },
  { name: 'Kavitha', location: 'Mudukulathur', text: 'Quality workmanship and professional service. My electricity bill has dropped significantly and the system requires no maintenance.', savings: '₹3,500/month' },
]

const ReviewCard = React.memo(function ReviewCard({ review, index, reduceMotion }: { review: Review; index: number; reduceMotion: boolean }) {
  return (
    <motion.div
      initial={fadeUp(reduceMotion).initial}
      whileInView={fadeUp(reduceMotion).whileInView}
      viewport={fadeUp(reduceMotion).viewport}
      transition={reduceMotion ? {} : { duration: 0.4, delay: index * 0.08 }}
      className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex text-yellow-400 text-xl mb-4">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="w-5 h-5 fill-yellow-400" />
        ))}
      </div>
      <p className="text-dark-700 text-base leading-relaxed">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center justify-between">
        <div className="text-left">
          <p className="font-semibold text-lg text-dark-900">{review.name}</p>
          <p className="text-sm text-dark-600">{review.location}</p>
        </div>
        {review.savings && (
          <div className="text-right">
            <p className="text-sm text-primary-600 font-semibold">{review.savings}</p>
            <p className="text-xs text-dark-500">saved</p>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center gap-1 text-xs text-primary-600 font-medium">
        <CheckCircle className="w-3 h-3" />
        Verified Customer
      </div>
    </motion.div>
  )
})

const Testimonials = () => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', location: '', text: '', rating: 5 })
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS)
  const { shouldReduceMotion } = useReducedMotion()

  const handleSubmit = useCallback(() => {
    if (!form.name || !form.text || !form.location) {
      alert('Please fill all fields')
      return
    }
    setReviews(prev => [{ name: form.name, location: form.location, text: form.text }, ...prev])
    setForm({ name: '', location: '', text: '', rating: 5 })
    setOpen(false)
  }, [form])

  return (
    <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 2xl:px-24 text-center">
        <motion.div
          initial={fadeUp(shouldReduceMotion).initial}
          whileInView={fadeUp(shouldReduceMotion).whileInView}
          viewport={fadeUp(shouldReduceMotion).viewport}
          transition={shouldReduceMotion ? {} : { duration: 0.5 }}
        >
          <h2 className="font-poppins text-5xl font-bold text-dark-900">
            What Our Customers Say
          </h2>
          <p className="text-dark-600 mt-3">
            Real stories from people who switched to solar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-14">
          {reviews.map((t: Review, i: number) => (
            <ReviewCard key={`${t.name}-${i}`} review={t} index={i} reduceMotion={shouldReduceMotion} />
          ))}
        </div>

        <motion.div
          initial={fadeUp(shouldReduceMotion).initial}
          whileInView={fadeUp(shouldReduceMotion).whileInView}
          viewport={fadeUp(shouldReduceMotion).viewport}
          transition={shouldReduceMotion ? {} : { duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-dark-600"
        >
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Verified Customers
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            1000+ Installations
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            4.9/5 Rating
          </span>
        </motion.div>

        <motion.button
          initial={fadeUp(shouldReduceMotion).initial}
          whileInView={fadeUp(shouldReduceMotion).whileInView}
          viewport={fadeUp(shouldReduceMotion).viewport}
          transition={shouldReduceMotion ? {} : { duration: 0.5, delay: 0.4 }}
          onClick={() => setOpen(true)}
          className="mt-8 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md"
        >
          + Write a Review
        </motion.button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-2xl w-full max-w-md shadow-md transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-poppins text-2xl font-bold text-dark-900">Submit Review</h3>
              <button
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-dark-600" />
              </button>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-dark-700 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <label className="block text-sm font-medium text-dark-700 mb-2">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                value={form.location}
                onChange={(e) => setForm(p => ({ ...p, location: e.target.value }))}
                className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              <label className="block text-sm font-medium text-dark-700 mb-2">Your Review</label>
              <textarea
                placeholder="Share your experience..."
                value={form.text}
                onChange={(e) => setForm(p => ({ ...p, text: e.target.value }))}
                rows={4}
                className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
              />
              <label className="block text-sm font-medium text-dark-700 mb-2">Rating</label>
              <select
                value={form.rating}
                onChange={(e) => setForm(p => ({ ...p, rating: parseInt(e.target.value) }))}
                className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              >
                <option value={5}>★★★★★ (5 stars)</option>
                <option value={4}>★★★★ (4 stars)</option>
                <option value={3}>★★★ (3 stars)</option>
                <option value={2}>★★ (2 stars)</option>
                <option value={1}>★ (1 star)</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-lg border border-dark-200 text-dark-700 hover:bg-dark-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors font-medium shadow-md"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default React.memo(Testimonials)
