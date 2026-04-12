export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900">
            Why Choose Us
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
            <div className="text-4xl mb-4">✔</div>
            <h3 className="font-semibold text-xl text-dark-900 mb-2">Govt Approved</h3>
            <p className="text-dark-600">MNRE approved vendor with subsidy support</p>
          </div>
          <div className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
            <div className="text-4xl mb-4">✔</div>
            <h3 className="font-semibold text-xl text-dark-900 mb-2">25-Year Warranty</h3>
            <p className="text-dark-600">Long-term performance guarantee on all panels</p>
          </div>
          <div className="p-6 border border-dark-200 rounded-xl hover:border-primary-300 transition-colors">
            <div className="text-4xl mb-4">✔</div>
            <h3 className="font-semibold text-xl text-dark-900 mb-2">Expert Installation</h3>
            <p className="text-dark-600">Certified engineers with 1000+ installations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
