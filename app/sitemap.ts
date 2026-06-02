import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.sunsolar.com'

const routes = [
  { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
  { url: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
  { url: '/products', changeFrequency: 'weekly' as const, priority: 0.8 },
  { url: '/projects', changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
