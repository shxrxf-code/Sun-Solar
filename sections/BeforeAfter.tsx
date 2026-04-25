import Image from 'next/image'

export default function BeforeAfter() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Before & After
          </h2>
          <p className="text-dark-600 text-lg">See the transformation</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="relative">
            <div className="h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/projects/before.jpg"
                alt="Before Solar Installation"
                width={600}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-dark-600 mt-3 font-medium">Before Solar</p>
          </div>
          <div className="relative">
            <div className="h-64 md:h-80 bg-primary-100 rounded-lg overflow-hidden">
              <Image
                src="/projects/after.jpg"
                alt="After Solar Installation"
                width={600}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-primary-600 mt-3 font-semibold">After Solar • 95% Savings</p>
          </div>
        </div>
      </div>
    </section>
  )
}
