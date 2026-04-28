import { Metadata } from 'next'
import { MapPin, Zap, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import Button from '@/ui/Button'
import Card from '@/ui/Card'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Solar Projects | Sun Solar Power Systems',
  description: 'View our successful solar installations across India. Real case studies with ROI details and customer testimonials.',
}

const projects = [
  {
    id: 1,
    title: 'Residential Solar - Ramanathapuram',
    location: 'Ramanathapuram',
    size: '5kW On-Grid',
    beforeBill: '₹8,500/month',
    afterBill: '₹1,200/month',
    savings: '₹88,000/year',
    roi: '4.5 years',
    image: '/Ongrid.jpg',
    description: 'Complete rooftop solar installation for a 3BHK apartment. System includes premium Tata Power Solar panels with 25-year warranty.',
  },
  {
    id: 2,
    title: 'Commercial Solar - Mumbai',
    location: 'Andheri East, Mumbai',
    size: '25kW On-Grid',
    beforeBill: '₹45,000/month',
    afterBill: '₹8,000/month',
    savings: '₹4,44,000/year',
    roi: '4 years',
    image: '/Ongrid.jpg',
    description: 'Large-scale commercial installation for a software company. System designed to handle peak load requirements with net metering.',
  },
  {
    id: 3,
    title: 'Industrial Solar - Ahmedabad',
    location: 'GIDC, Ahmedabad',
    size: '100kW On-Grid',
    beforeBill: '₹1,80,000/month',
    afterBill: '₹35,000/month',
    savings: '₹17,40,000/year',
    roi: '3.5 years',
    image: '/Ongrid.jpg',
    description: 'Industrial solar installation for a textile manufacturing unit. Custom-designed system to reduce operational costs significantly.',
  },
  {
    id: 4,
    title: 'Solar Water Heater - Bangalore',
    location: 'HSR Layout, Bangalore',
    size: '300LPD System',
    beforeBill: '₹2,500/month',
    afterBill: '₹0/month',
    savings: '₹30,000/year',
    roi: '2 years',
    image: '/solar-water-heater.jpg',
    description: 'ETC type solar water heater for a villa. Provides hot water for 300 liters daily with zero electricity cost.',
  },
  {
    id: 5,
    title: 'Agricultural Solar Pump - Rajasthan',
    location: 'Jodhpur, Rajasthan',
    size: '10HP Solar Pump',
    beforeBill: '₹15,000/month (diesel)',
    afterBill: '₹0/month',
    savings: '₹1,80,000/year',
    roi: '3 years',
    image: '/Agri-1.png',
    description: 'AC solar pump for irrigation. Replaced diesel pump, completely eliminating fuel costs and reducing carbon footprint.',
  },
  {
    id: 6,
    title: 'Hybrid System - Hyderabad',
    location: 'Gachibowli, Hyderabad',
    size: '10kW Hybrid',
    beforeBill: '₹18,000/month',
    afterBill: '₹3,500/month',
    savings: '₹1,74,000/year',
    roi: '5 years',
    image: '/Offgrid.jpg',
    description: 'Hybrid system with battery backup for a luxury villa. Provides power during outages while maximizing savings through net metering.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Projects Grid */}
      <section id="projects" className="py-12 mt-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* IMAGE */}
                <div className="h-44 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={176}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {project.title}
                  </h3>

                  <div className="inline-block bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                    {project.size}
                  </div>

                  <p className="text-sm text-neutral-500 line-clamp-2">
                    {project.description}
                  </p>

                  {/* META */}
                  <div className="flex justify-between text-xs text-neutral-400 pt-1">
                    <span>{project.savings}</span>
                    <span>{project.roi}</span>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-2 h-9 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
            Want Similar Savings?
          </h2>
          <p className="text-lg text-dark-600 mb-8">
            Get a free consultation and discover how much you can save with solar. Our experts will design the perfect system for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
