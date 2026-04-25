import Hero from '@/sections/Hero'
import TrustStrip from '@/sections/TrustStrip'
import Services from '@/sections/Services'
import SavingsROI from '@/sections/SavingsROI'
import HowItWorks from '@/sections/HowItWorks'
import WhyChooseUs from '@/sections/WhyChooseUs'
import FAQ from '@/sections/FAQ'
import Testimonials from '@/sections/Testimonials'
import Brands from '@/sections/Brands'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1920&q=80"
          alt="Solar Panels Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <TrustStrip />
        <Services />
        <SavingsROI />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
        <Testimonials />
        <Brands />
      </div>
    </div>
  )
}
