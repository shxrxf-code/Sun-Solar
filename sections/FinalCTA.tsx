import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
          Start Saving Today
        </h2>
        <p className="text-white/90 mb-8 text-lg">
          Get a free consultation and see how much you can save with solar
        </p>
        <Link href="/contact">
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md w-full sm:w-auto">
            Get Free Consultation
          </button>
        </Link>
      </div>
    </section>
  )
}
