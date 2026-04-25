'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'
import Button from '@/ui/Button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-16 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary-100 p-2 rounded-lg">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-primary-600 font-semibold">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
                Get 40% Government Subsidy on Solar Installation
              </h2>
              <p className="text-lg text-dark-600 mb-6">
                Don't miss out on government subsidies. Install solar now and save up to ₹78,000 on a 5kW system. Offer valid till March 2024.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-dark-900 mb-6">Quick Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Save up to 95% on electricity bills',
                  '25-year performance warranty',
                  'Free site survey and consultation',
                  'MNRE approved installation',
                  'Complete paperwork assistance',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-dark-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
