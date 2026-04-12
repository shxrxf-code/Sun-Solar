import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products | Sun Solar Power Systems',
  description: 'High-quality solar panels, inverters, batteries, and pumps for homes and businesses.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
