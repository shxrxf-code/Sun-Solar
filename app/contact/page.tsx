'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import Button from '@/ui/Button'
import Card from '@/ui/Card'
import Input from '@/ui/Input'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  return (
    <div className="bg-white">
      {/* Contact Section */}
      <section id="contact-form" className="pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-dark-900 mb-6">Request Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <Input
                  name="location"
                  placeholder="Your Location (City/Area)"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Requirement Type
                  </label>
                  <select
                    name="requirement"
                    className="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    required
                  >
                    <option value="">Select Requirement</option>
                    <option value="residential">Residential Solar (1-10kW)</option>
                    <option value="commercial">Commercial Solar (10-100kW)</option>
                    <option value="industrial">Industrial Solar (100kW+)</option>
                    <option value="water-heater">Solar Water Heater</option>
                    <option value="pump">Solar Pump</option>
                    <option value="maintenance">Maintenance/Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Monthly Electricity Bill (Optional)
                  </label>
                  <Input
                    name="bill"
                    type="number"
                    placeholder="₹5,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-dark-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-dark-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900 mb-1">Phone</div>
                      <a href="tel:+919876543210" className="text-primary-600 hover:text-primary-700">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900 mb-1">Email</div>
                      <a href="mailto:info@sunsolar.com" className="text-primary-600 hover:text-primary-700">
                        info@sunsolar.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900 mb-1">Address</div>
                      <div className="text-dark-600">
                        123 Solar Street<br />
                        Green Energy Park<br />
                        New Delhi - 110001
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg">
                      <Clock className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900 mb-1">Business Hours</div>
                      <div className="text-dark-600">
                        Mon - Sat: 9:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-green-500 to-green-600 text-white">
                <div className="flex items-center mb-4">
                  <MessageCircle className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Chat on WhatsApp</h3>
                </div>
                <p className="text-green-100 mb-6">
                  Get instant responses to your queries. Our team is available on WhatsApp for quick consultations.
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                >
                  Start Chat
                </a>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                <h3 className="text-xl font-bold mb-4">Need Urgent Help?</h3>
                <p className="text-primary-100 mb-6">
                  Call us directly for immediate assistance with solar emergencies or urgent inquiries.
                </p>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Card>
            </div>
          </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">
            Find Us
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Visit our office for a face-to-face consultation
          </p>
        </div>
        <Card className="overflow-hidden h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.966595559638!2d77.20898731508263!3d28.58855048241964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1635959481234!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Card>
      </section>
    </div>
  )
}
