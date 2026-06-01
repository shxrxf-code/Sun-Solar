import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'On-Grid Solar Systems',
    desc: 'Connect your system to the power grid and earn credits from excess energy.',
    features: ['Net metering support', 'Lower electricity bills', 'Govt subsidy available'],
    image: '/Ongrid.jpg',
  },
  {
    title: 'Off-Grid Solar Systems',
    desc: 'Complete energy independence with battery backup for remote locations.',
    features: ['Battery storage included', 'Power during outages', '24/7 energy availability'],
    image: '/Offgrid.jpg',
  },
  {
    title: 'Solar Water Heaters',
    desc: 'Eco-friendly water heating with zero electricity cost throughout the year.',
    features: ['Zero running cost', '300 days hot water', '5-year warranty'],
    image: '/solar-water-heater.jpg',
  },
  {
    title: 'Solar Water Pumps',
    desc: 'Agricultural and industrial water pumping powered by solar energy.',
    features: ['No fuel costs', 'Automatic operation', 'Govt subsidy eligible'],
    image: '/solar-water-pumps.jpg',
  },
]

export default function ServicesPage() {
  return (
    <section className="bg-[#f4f6f5] min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-neutral-900">
            Complete Solar Solutions
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            From installation to maintenance, we provide end-to-end solar services designed for maximum savings and efficiency.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white border-2 border-[#d1d5db] rounded-xl overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-shadow"
            >
              {service.image && (
                <div className="h-auto overflow-hidden relative aspect-video bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
                <p className="text-xs text-neutral-600">{service.desc}</p>
                <ul className="space-y-1 text-xs text-neutral-500">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
                <Link href="/contact" className="text-green-600 text-xs font-medium pt-1 hover:text-green-700 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center text-neutral-900 mb-10">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              ['Consultation', 'Understand your energy needs'],
              ['Site Inspection', 'Evaluate your location'],
              ['Installation', 'Quick and professional setup'],
              ['Savings Start', 'Reduce electricity bills instantly'],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white border-2 border-[#d1d5db] rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-neutral-900">{i + 1}. {title}</h3>
                <p className="text-sm text-neutral-500 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-white border-2 border-[#d1d5db] rounded-xl p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <h2 className="text-2xl font-semibold text-center text-neutral-900 mb-8">Why Choose Sun Solar?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              ['1000+ Installations', 'Proven track record across India'],
              ['25-Year Warranty', 'Long-term performance guarantee'],
              ['Govt Approved', 'Eligible for subsidies and incentives'],
            ].map(([title, desc], i) => (
              <div key={i}>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-500 mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
