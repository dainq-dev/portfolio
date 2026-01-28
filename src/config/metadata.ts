import { Metadata } from 'next'

// Site Configuration
export const siteConfig = {
  name: 'Nguyen Quoc Dai',
  title: 'Nguyen Quoc Dai | Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer with 4+ years experience in Next.js, React, NestJS, and data visualization. Specialized in building scalable web applications and FinTech solutions. Based in Ho Chi Minh City, Vietnam.',
  url: 'https://portfolio-dainq-fe.vercel.app',
  ogImage: 'https://portfolio-dainq-fe.vercel.app/dai-nq.png',
  links: {
    github: 'https://github.com/yourusername', // TODO: Add your GitHub
    linkedin: 'https://linkedin.com/in/yourusername', // TODO: Add your LinkedIn
    email: 'dainguyen020199@gmail.com', // TODO: Add your email
  },
  locale: 'vi_VN',
  author: {
    name: 'Nguyen Quoc Dai',
    email: 'dainguyen020199@gmail.com',
    url: 'https://portfolio-dainq-fe.vercel.app',
  }
}

// Keywords for SEO
export const keywords = [
  // Primary Keywords
  'Full-Stack Developer',
  'Software Engineer',
  'Nguyen Quoc Dai',
  'Nguyễn Quốc Đại',
  'Đại Front-end Developer',
  'Đại Software Engineer',
  'Portfolio Đại Nguyễn',
  'Dai Nguyen Portfolio',
  
  // Technical Skills
  'Next.js Developer',
  'React Developer',
  'NestJS Developer',
  'TypeScript Expert',
  'JavaScript Developer',
  'Node.js Developer',

  // Specializations
  'Frontend Developer',
  'Backend Developer',
  'Data Visualization',
  'FinTech Developer',
  'Web Application Development',

  // Location-based
  'Vietnam Software Engineer',
  'Ho Chi Minh City Developer',
  'HCMC Software Engineer',

  // Additional Technologies
  'React Native',
  'GraphQL',
  'REST API',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',

  // Soft Skills
  'Team Leadership',
  'Agile Development',
  'Code Review',
  'Technical Mentoring',
]

// Generate comprehensive metadata
export const generateMetadata = (): Metadata => {
  return {
    // Basic Metadata
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,

    // Verification
    metadataBase: new URL(siteConfig.url),

    // Alternate Languages
    alternates: {
      canonical: siteConfig.url,
      languages: {
        'en-US': siteConfig.url,
        'vi-VN': `${siteConfig.url}/vi`,
      },
    },

    // Open Graph
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
          type: 'image/jpeg',
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: '@yourusername', // TODO: Add your Twitter handle
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Icons
    icons: {
      icon: [
        { url: '/favicon/favicon.ico' },
        { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { rel: 'mask-icon', url: '/favicon/favicon-32x32.png', },
      ],
    },

    // Manifest
    manifest: '/site.webmanifest',

    // Additional
    category: 'technology',
    classification: 'Portfolio',

    // Verification Tags (using HTML file method instead)
    // verification: {
    //   google: 'your-google-verification-code',
    //   yandex: 'your-yandex-verification-code',
    //   bing: 'your-bing-verification-code',
    // },
  }
}

// JSON-LD Structured Data
export const generateJsonLd = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    jobTitle: 'Full-Stack Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Your Company', // TODO: Add your current company if applicable
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'FPT University',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ho Chi Minh City',
      addressCountry: 'Vietnam',
    },
    email: siteConfig.author.email,
    description: siteConfig.description,
    knowsAbout: [
      'Next.js',
      'React',
      'NestJS',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Data Visualization',
      'Full-Stack Development',
      'FinTech',
      'Web Development',
    ],
  }
}
