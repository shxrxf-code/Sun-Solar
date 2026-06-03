import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

const BASE_URL = 'https://www.sunsolarpowersystems.com'

const serviceRoutes = [
  '/services/solar-panel-installation',
  '/services/on-grid-solar',
  '/services/off-grid-solar',
  '/services/solar-water-heater',
  '/services/solar-water-pump',
  '/services/solar-street-light',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: '/services', changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: '/products', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/projects', changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: '/blog', changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const servicePages = serviceRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...servicePages,
    ...blogPages,
  ]
}
