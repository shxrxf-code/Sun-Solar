export default function HowItWorks() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">1</div>
            <h3 className="font-semibold text-lg text-dark-900 mb-1">Consultation</h3>
            <p className="text-sm text-dark-600">Free assessment</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">2</div>
            <h3 className="font-semibold text-lg text-dark-900 mb-1">Site Visit</h3>
            <p className="text-sm text-dark-600">Custom design</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">3</div>
            <h3 className="font-semibold text-lg text-dark-900 mb-1">Installation</h3>
            <p className="text-sm text-dark-600">3-5 days</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">4</div>
            <h3 className="font-semibold text-lg text-dark-900 mb-1">Start Saving</h3>
            <p className="text-sm text-dark-600">From day one</p>
          </div>
        </div>
      </div>
    </section>
  )
}
