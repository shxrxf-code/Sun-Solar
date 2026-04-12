import Link from 'next/link'

export default function CalculatorPreview() {
  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="bg-white p-10 md:p-16 rounded-2xl shadow-md max-w-4xl mx-auto">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Estimate Your Savings
          </h2>
          <p className="text-dark-600 mb-8 text-lg">
            Calculate how much you can save with solar in just 2 minutes
          </p>
          <Link href="/calculator">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md w-full sm:w-auto">
              Calculate Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
