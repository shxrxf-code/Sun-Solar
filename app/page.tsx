import Hero from '@/sections/Hero'
import TrustStrip from '@/sections/TrustStrip'
import Services from '@/sections/Services'
import SavingsROI from '@/sections/SavingsROI'
import HowItWorks from '@/sections/HowItWorks'
import WhyChooseUs from '@/sections/WhyChooseUs'
import FAQ from '@/sections/FAQ'
import Testimonials from '@/sections/Testimonials'
import Brands from '@/sections/Brands'

export default function Home() {
  return (
    <div className="bg-white relative">
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
  )
}
