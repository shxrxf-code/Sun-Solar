'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X, CheckCircle } from 'lucide-react'
import Image from 'next/image'

interface Review {
  name: string
  location: string
  text: string
  image?: string
  savings?: string
}

const Testimonials = () => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', location: '', text: '', rating: 5 })
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Rajesh Kumar',
      location: 'Chennai',
      text: 'Excellent service! My bill dropped from ₹8,000 to ₹1,500.',
      image: '/customers/rajesh.jpg',
      savings: '₹6,500/month',
    },
    {
      name: 'Anita Sharma',
      location: 'Mumbai',
      text: 'Professional team and fast installation. Highly recommend!',
      image: '/customers/anita.jpg',
      savings: '₹7,200/month',
    },
    {
      name: 'Vikram Singh',
      location: 'Bangalore',
      text: 'Best investment I made. Saving huge every month!',
      image: '/customers/vikram.jpg',
      savings: '₹5,800/month',
    },
    {
      name: 'Priya Patel',
      location: 'Ahmedabad',
      text: 'Great after-sales support. Very satisfied with the quality.',
      image: '/customers/priya.jpg',
      savings: '₹6,100/month',
    },
    {
      name: 'Suresh Reddy',
      location: 'Hyderabad',
      text: 'Got subsidy without any hassle. Smooth experience overall.',
      image: '/customers/suresh.jpg',
      savings: '₹5,500/month',
    },
    {
      name: 'Meena Gupta',
      location: 'Pune',
      text: 'The team explained everything clearly. Trustworthy service!',
      image: '/customers/meena.jpg',
      savings: '₹6,300/month',
    },
  ])

  const handleSubmit = () => {
    if (!form.name || !form.text || !form.location) {
      alert('Please fill all fields')
      return
    }

    setReviews([
      {
        name: form.name,
        location: form.location,
        text: form.text,
      },
      ...reviews,
    ])

    setForm({ name: '', location: '', text: '', rating: 5 })
    setOpen(false)
  }

  return (
    <section className="py-12 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 2xl:px-24 text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins text-5xl font-bold text-dark-900">
            What Our Customers Say
          </h2>
          <p className="text-dark-600 mt-3">
            Real stories from people who switched to solar
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-14">

          {reviews.map((t: Review, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-5 md:p-8 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition duration-300"
            >

              {/* Stars */}
              <div className="flex text-yellow-400 text-xl mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-dark-700 text-base leading-relaxed">
                "{t.text}"
              </p>

              {/* User */}
              <div className="mt-6 flex items-center justify-between">
                <div className="text-left">
                  <p className="font-semibold text-lg text-dark-900">{t.name}</p>
                  <p className="text-sm text-dark-600">{t.location}</p>
                </div>

                {t.savings && (
                  <div className="text-right">
                    <p className="text-sm text-primary-600 font-semibold">{t.savings}</p>
                    <p className="text-xs text-dark-500">saved</p>
                  </div>
                )}
              </div>

              {/* Verified Badge */}
              <div className="mt-4 flex items-center gap-1 text-xs text-primary-600 font-medium">
                <CheckCircle className="w-3 h-3" />
                Verified Customer
              </div>

            </motion.div>
          ))}

        </div>

        {/* TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
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

        {/* WRITE REVIEW BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => setOpen(true)}
          className="mt-8 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
        >
          + Write a Review
        </motion.button>

      </div>

      {/* MODAL FORM */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white p-8 rounded-2xl w-full max-w-md shadow-md"
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
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Your Review</label>
                  <textarea
                    placeholder="Share your experience..."
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    rows={4}
                    className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">Rating</label>
                  <select
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: parseInt(e.target.value) })}
                    className="w-full border border-dark-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  >
                    <option value={5}>★★★★★ (5 stars)</option>
                    <option value={4}>★★★★ (4 stars)</option>
                    <option value={3}>★★★ (3 stars)</option>
                    <option value={2}>★★ (2 stars)</option>
                    <option value={1}>★ (1 star)</option>
                  </select>
                </div>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Testimonials
