import { Metadata } from 'next'
import Link from 'next/link'
import { Sun, Battery, Droplets, Waves, ArrowRight, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react'
import Button from '@/ui/Button'
import Card from '@/ui/Card'

export const metadata: Metadata = {
  title: 'Solar Services | Sun Solar Power Systems',
  description: 'Complete solar solutions - On-grid, Off-grid, Solar Water Heaters, and Solar Pumps. Premium installation with 25-year warranty.',
}

const services = [
  {
    icon: Sun,
    title: 'On-Grid Solar Systems',
    description: 'Connected to the power grid, allowing you to export excess electricity and earn credits. Best for areas with reliable grid power.',
    features: [
      'Net metering enabled',
      'Export excess power to grid',
      'Low maintenance',
      'Fast ROI (4-5 years)',
      'Government subsidy eligible',
    ],
    whoFor: 'Homeowners, businesses with reliable grid connection',
    priceRange: '₹45,000 - ₹60,000 per kW',
    roi: '4-5 years',
  },
  {
    icon: Battery,
    title: 'Off-Grid Solar Systems',
    description: 'Complete independence from the power grid with battery storage. Ideal for remote areas or places with frequent power cuts.',
    features: [
      'Battery backup included',
      'Power during outages',
      'Complete energy independence',
      'Suitable for remote locations',
      '24/7 power availability',
    ],
    whoFor: 'Remote areas, frequent power cut zones',
    priceRange: '₹65,000 - ₹85,000 per kW',
    roi: '5-6 years',
  },
  {
    icon: Droplets,
    title: 'Solar Water Heaters',
    description: 'Eco-friendly water heating solutions using solar energy. Zero electricity cost for hot water throughout the year.',
    features: [
      '300 days hot water annually',
      'Zero running cost',
      '5-year warranty',
      'Instant hot water',
      'Environmentally friendly',
    ],
    whoFor: 'Homes, hotels, hospitals, hostels',
    priceRange: '₹15,000 - ₹35,000',
    roi: '2-3 years',
  },
  {
    icon: Waves,
    title: 'Solar Pumps',
    description: 'Agricultural and industrial water pumping powered by solar energy. Replace diesel pumps and save huge fuel costs.',
    features: [
      'No fuel or electricity cost',
      'Low maintenance',
      'Government subsidy available',
      'Automatic operation',
      'Long lifespan (20+ years)',
    ],
    whoFor: 'Farmers, agriculture, irrigation',
    priceRange: '₹50,000 - ₹2,00,000',
    roi: '3-4 years',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Services Grid */}
      <section className="pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-primary-100 rounded-2xl">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{service.priceRange}</div>
                    <div className="text-sm text-dark-600">Estimated Cost</div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-dark-900 mb-3">{service.title}</h2>
                <p className="text-dark-600 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold text-dark-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-dark-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <div className="flex items-center text-sm text-dark-600 mb-1">
                        <Users className="w-4 h-4 mr-1" />
                        Best For
                      </div>
                      <div className="text-sm font-medium text-dark-900">{service.whoFor}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-dark-600 mb-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        ROI Period
                      </div>
                      <div className="text-sm font-medium text-dark-900">{service.roi}</div>
                    </div>
                  </div>
                </div>
                
                <Link href="/contact">
                  <Button className="w-full group">
                    Get Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
            Not Sure Which System is Right for You?
          </h2>
          <p className="text-lg text-dark-600 mb-8">
            Our experts will analyze your requirements and recommend the best solar solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Get Free Consultation
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
