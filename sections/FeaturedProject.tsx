import Image from 'next/image'

export default function FeaturedProject() {
  return (
    <section className="py-16 bg-dark-50 content-visibility-auto">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75"
            alt="Solar Installation Chennai"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="bg-primary-600 text-white px-4 py-2 rounded-md inline-flex items-center gap-2 text-sm font-medium">
              <span>⚡</span>
              Chennai • 5kW • ₹7,500 saved/month
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-dark-900">
            5kW Residential System – Chennai
          </h2>
          <p className="mt-3 text-base text-dark-600">
            Reduced electricity bill from ₹8,000 to ₹1,500 per month.
          </p>
          <ul className="mt-4 text-sm text-dark-600 space-y-2">
            {['Installed in 3 days', 'Govt subsidy applied', '5-year ROI'].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-primary-600">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
