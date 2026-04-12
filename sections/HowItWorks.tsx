export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              1
            </div>
            <h3 className="font-semibold text-xl text-dark-900 mb-2">Consultation</h3>
            <p className="text-dark-600">Free site assessment and customized solar plan</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              2
            </div>
            <h3 className="font-semibold text-xl text-dark-900 mb-2">Installation</h3>
            <p className="text-dark-600">Professional installation within 3-5 days</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              3
            </div>
            <h3 className="font-semibold text-xl text-dark-900 mb-2">Start Saving</h3>
            <p className="text-dark-600">Begin saving from day one with net metering</p>
          </div>
        </div>
      </div>
    </section>
  )
}
