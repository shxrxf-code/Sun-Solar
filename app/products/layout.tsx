import type { Metadata } from 'next'

const BASE_URL = 'https://www.sunsolar.com'

export const metadata: Metadata = {
  title: 'Solar Products',
  description: 'Browse premium solar panels, inverters, batteries, and water pumps. Top brands like Waaree, Adani, Luminous, and Sukam. Get the best prices with warranty.',
  alternates: {
    canonical: `${BASE_URL}/products`,
  },
  openGraph: {
    title: 'Solar Products | Sun Solar Power Systems',
    description: 'Premium solar panels, inverters, batteries, and pumps for homes and businesses.',
    url: `${BASE_URL}/products`,
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
