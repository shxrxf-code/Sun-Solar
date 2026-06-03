import type { Metadata } from 'next'
import OurWorksPage from './page'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

export const metadata: Metadata = {
  title: 'Our Works | Sun Solar Power Systems',
  description: 'Explore completed solar panel installations, solar water heater projects, solar water pumps and on-grid solar systems by Sun Solar Power Systems in Ramanathapuram.',
  alternates: {
    canonical: `${BASE_URL}/our-works`,
  },
  openGraph: {
    title: 'Our Works | Sun Solar Power Systems - Ramanathapuram',
    description: 'Explore completed solar panel installations, solar water heaters, solar water pumps and on-grid solar systems in Ramanathapuram.',
    url: `${BASE_URL}/our-works`,
  },
}

export default function OurWorksLayout() {
  return <OurWorksPage />
}
