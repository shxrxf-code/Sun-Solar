import { Metadata } from 'next'
import { MapPin, Zap, TrendingUp, Calendar, ArrowRight } from 'lucide-react'
import Button from '@/ui/Button'
import Card from '@/ui/Card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solar Projects | Sun Solar Power Systems',
  description: 'View our successful solar installations across India. Real case studies with ROI details and customer testimonials.',
}

const projects = [
  {
    id: 1,
    title: 'Residential Solar - Delhi',
    location: 'Vasant Kunj, Delhi',
    size: '5kW On-Grid',
    beforeBill: '₹8,500/month',
    afterBill: '₹1,200/month',
    savings: '₹88,000/year',
    roi: '4.5 years',
    image: 'Residential home with rooftop solar panels',
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
    image: 'Office building with solar installation',
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
    image: 'Factory rooftop with solar array',
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
    image: 'Solar water heater installation on terrace',
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
    image: 'Solar pump in agricultural field',
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
    image: 'Hybrid solar with battery backup',
    description: 'Hybrid system with battery backup for a luxury villa. Provides power during outages while maximizing savings through net metering.',
  },
]

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* Premium Header with Stats */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-16 2xl:px-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
              <div className="w-12 h-1 bg-primary-600 rounded mb-4"></div>

              <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-900 leading-tight">
                Real Solar Projects <br />
                <span className="text-primary-600">Across India</span>
              </h2>

              <p className="text-dark-600 mt-4 max-w-lg">
                Real installations. Real savings. See how we've helped 1000+ customers
                reduce electricity bills and switch to clean, sustainable energy.
              </p>

              {/* CTA */}
              <div className="mt-6 flex gap-4">
                <Link href="#projects">
                  <Button size="lg" className="group">
                    View Projects
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE (STATS / TRUST BLOCK) */}
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h3 className="text-2xl font-bold text-primary-600">1000+</h3>
                <p className="text-sm text-dark-600">Installations</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h3 className="text-2xl font-bold text-primary-600">₹50Cr+</h3>
                <p className="text-sm text-dark-600">Savings Generated</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h3 className="text-2xl font-bold text-primary-600">15+</h3>
                <p className="text-sm text-dark-600">Years Experience</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow text-center">
                <h3 className="text-2xl font-bold text-primary-600">98%</h3>
                <p className="text-sm text-dark-600">Customer Satisfaction</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-8 mt-10">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-primary-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-dark-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-2">{project.title}</h3>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {project.size}
                  </div>
                  <p className="text-dark-600 text-sm mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-dark-600 mb-1">Before</div>
                      <div className="text-sm font-semibold text-red-600">{project.beforeBill}</div>
                    </div>
                    <div>
                      <div className="text-xs text-dark-600 mb-1">After</div>
                      <div className="text-sm font-semibold text-green-600">{project.afterBill}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 mt-4">
                    <div>
                      <div className="flex items-center text-xs text-dark-600 mb-1">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Annual Savings
                      </div>
                      <div className="text-sm font-bold text-primary-600">{project.savings}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-xs text-dark-600 mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        ROI
                      </div>
                      <div className="text-sm font-bold text-primary-600">{project.roi}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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
            <Link href="/calculator">
              <Button variant="outline" size="lg">
                Calculate Savings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
