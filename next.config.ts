import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Compression (gzip/brotli)
  compress: true,

  // Generate sitemap and robots.txt
  // Note: You can use packages like 'next-sitemap' for more advanced sitemap generation

  // Trailing Slash - set to false for cleaner URLs
  trailingSlash: false,

  // Power redirects for SEO (example redirects)
  async redirects() {
    return [
      // Example: Redirect old URLs to new ones
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true, // 301 redirect
      // },
    ]
  },

  // Security and Performance Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Cache static assets
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Output - Use standalone for smaller Docker images in production
  // output: 'standalone',

  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  // Turbopack automatically handles code splitting and optimization
  turbopack: {},

  // TypeScript strict mode
  typescript: {
    ignoreBuildErrors: false,
  },

  // React strict mode for better error handling
  reactStrictMode: true,

  // Powered by header
  poweredByHeader: false,
};

export default nextConfig;
