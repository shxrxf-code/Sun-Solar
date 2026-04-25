import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="bg-primary-600 text-white text-center py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-poppins text-3xl md:text-4xl font-semibold">
          Get Your Free Solar Consultation
        </h2>
        <Link href="/contact">
          <button className="mt-6 bg-white text-primary-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  )
}
