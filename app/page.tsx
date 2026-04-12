import Hero from '@/sections/Hero'
import TrustStrip from '@/sections/TrustStrip'
import ProblemSolution from '@/sections/ProblemSolution'
import Services from '@/sections/Services'
import HowItWorks from '@/sections/HowItWorks'
import CalculatorPreview from '@/sections/CalculatorPreview'
import WhyChooseUs from '@/sections/WhyChooseUs'
import ProjectsPreview from '@/sections/ProjectsPreview'
import BeforeAfter from '@/sections/BeforeAfter'
import FinalCTA from '@/sections/FinalCTA'
import Testimonials from '@/sections/Testimonials'
import Brands from '@/sections/Brands'

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <CalculatorPreview />
      <WhyChooseUs />
      <ProjectsPreview />
      <BeforeAfter />
      <FinalCTA />
      <Testimonials />
      <Brands />
    </div>
  )
}
