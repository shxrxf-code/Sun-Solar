export default function Services() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-poppins text-3xl md:text-4xl font-semibold text-dark-900 mb-10">
          Our Solar Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-dark-200 p-6 rounded-lg hover:border-primary-300 transition-colors">
            <h3 className="font-semibold text-lg text-dark-900 mb-2">Residential Solar</h3>
            <p className="text-sm text-dark-500">
              Complete solar solutions for homes with subsidy support.
            </p>
          </div>

          <div className="border border-dark-200 p-6 rounded-lg hover:border-primary-300 transition-colors">
            <h3 className="font-semibold text-lg text-dark-900 mb-2">Commercial Solar</h3>
            <p className="text-sm text-dark-500">
              Reduce operational costs for your business.
            </p>
          </div>

          <div className="border border-dark-200 p-6 rounded-lg hover:border-primary-300 transition-colors">
            <h3 className="font-semibold text-lg text-dark-900 mb-2">Maintenance</h3>
            <p className="text-sm text-dark-500">
              Regular cleaning and system optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
