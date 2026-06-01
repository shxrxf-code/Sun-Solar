/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development best practices
  reactStrictMode: true,

  // Compress assets using gzip/brotli
  compress: true,

  // SWC-based minification (faster than Terser)
  swcMinify: true,

  // Build-time optimizations
  output: 'standalone',

  images: {
    // Optimize images in modern formats
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive image breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for layout shifts
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    optimizeCss: false, // CSS optimization disabled as we use Tailwind
    scrollRestoration: true,
  },
}

module.exports = nextConfig
