'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, TrendingUp, Calculator, ArrowRight } from 'lucide-react'
import Button from '@/ui/Button'
import Card from '@/ui/Card'
import Link from 'next/link'

export default function CalculatorPage() {
  const [monthlyBill, setMonthlyBill] = useState(5000)
  const [location, setLocation] = useState('delhi')

  const calculateSavings = () => {
    const costPerUnit = 6 // Average cost per unit in India
    const unitsPerMonth = monthlyBill / costPerUnit
    const unitsPerYear = unitsPerMonth * 12
    
    // Solar generation: 4 units per day per kW
    const solarGenerationPerKwPerYear = 4 * 365
    const requiredKw = Math.ceil(unitsPerYear / solarGenerationPerKwPerYear)
    
    // Cost per kW (average)
    const costPerKw = 55000
    const systemCost = requiredKw * costPerKw
    
    // Government subsidy (40% up to 3kW, 20% for remaining)
    let subsidy = 0
    if (requiredKw <= 3) {
      subsidy = systemCost * 0.4
    } else {
      subsidy = (3 * costPerKw * 0.4) + ((requiredKw - 3) * costPerKw * 0.2)
    }
    
    const finalCost = systemCost - subsidy
    const monthlySavings = monthlyBill * 0.8 // 80% savings
    const yearlySavings = monthlySavings * 12
    const paybackYears = Math.ceil(finalCost / yearlySavings)
    
    return {
      requiredKw,
      systemCost,
      subsidy,
      finalCost,
      monthlySavings,
      yearlySavings,
      paybackYears,
    }
  }

  const results = calculateSavings()

  return (
    <div className="bg-white">
      {/* Calculator Section */}
      <section className="pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Enter Your Details</h2>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-3">
                    Monthly Electricity Bill: ₹{monthlyBill.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full h-2 bg-primary-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <div className="flex justify-between text-xs text-dark-600 mt-2">
                    <span>₹1,000</span>
                    <span>₹50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-3">
                    Location
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  >
                    <option value="delhi">Delhi NCR</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Results Section */}
            <Card className="p-8 bg-gradient-to-br from-primary-50 to-white">
              <h2 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-primary-600 mr-2" />
                Your Solar Estimate
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-dark-600">Required System Size</span>
                  <span className="text-2xl font-bold text-primary-600">{results.requiredKw} kW</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-dark-600">System Cost (before subsidy)</span>
                  <span className="text-xl font-bold text-dark-900">₹{results.systemCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <span className="text-dark-600">Government Subsidy</span>
                  <span className="text-xl font-bold text-green-600">-₹{results.subsidy.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-primary-100 rounded-xl border-2 border-primary-500">
                  <span className="text-dark-900 font-semibold">Final Cost</span>
                  <span className="text-2xl font-bold text-primary-600">₹{results.finalCost.toLocaleString()}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="text-sm text-dark-600 mb-1">Monthly Savings</div>
                    <div className="text-xl font-bold text-primary-600">₹{results.monthlySavings.toLocaleString()}</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl">
                    <div className="text-sm text-dark-600 mb-1">Payback Period</div>
                    <div className="text-xl font-bold text-primary-600">{results.paybackYears} Years</div>
                  </div>
                </div>

                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-sm text-dark-600 mb-1">Total 25-Year Savings</div>
                  <div className="text-3xl font-bold text-green-600">₹{(results.yearlySavings * 25).toLocaleString()}</div>
                </div>
              </div>

              <Link href="/contact" className="mt-8 block">
                <Button size="lg" className="w-full group">
                  Get Detailed Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Why Go Solar?
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Solar energy is not just about savings—it's about securing your energy future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: '80% Savings',
                description: 'Reduce your electricity bills by up to 80% with solar power',
              },
              {
                icon: Zap,
                title: '25-Year Warranty',
                description: 'Long-term performance guarantee on solar panels',
              },
              {
                icon: Calculator,
                title: '5-6 Year Payback',
                description: 'Recover your investment in just 5-6 years',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary-100 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{benefit.title}</h3>
                <p className="text-dark-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
      </section>
    </div>
  )
}
