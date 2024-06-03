import { Metadata, Viewport } from 'next';

import { APP_URL, isProd } from './Data';

export const title = {
  default: 'João | Portfolio',
  template: '%s - João | Portfolio'
};

export const description =
  "Hi, I 'm João Eduardo, a full stack developer. I specialize in creating responsive, efficient web solutions. My work emphasizes clean design, usability, and modern web technologies, aiming to deliver optimal user experiences. Explore how strategic design and development converge in my projects.";

export const images = '/images/thumbnail.webp';

/**
 * Default Metadata for the website
 */
export const METADATA: Metadata = {
  metadataBase: new URL(APP_URL),
  title,
  description,
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/favicons/apple-touch-icon.png',
      sizes: '180x180 '
    },
    {
      rel: 'shortcut icon',
      url: '/favicon.ico',
      type: 'image/x-icon'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-32x32.png',
      type: 'image/png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-16x16.png',
      type: 'image/png',
      sizes: '16x16'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-96x96.png',
      type: 'image/png',
      sizes: '48x48'
    },
    {
      rel: 'icon',
      url: '/favicons/favicon-96x96.png',
      type: 'image/png',
      sizes: '96x96'
    }
  ],
  alternates: { canonical: '/' },
  keywords: [
    'Full Stack',
    'Portfolio',
    'João',
    'Eduardo',
    'João Eduardo',
    'Web Design',
    'Development',
    'Next.js',
    'GSAP Animation',
    'Web Performance',
    'Web Developer',
    'Software Engineering',
    'Creative Coding',
    'Freelancer'
  ],
  openGraph: {
    type: 'website',
    countryName: 'Brazil',
    title,
    description,
    images
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@joapedu',
    site: APP_URL,
    title,
    description,
    images
  },
  category: 'Portfolio',
  creator: 'João',
  authors: { name: 'João', url: APP_URL },
  robots: { index: isProd, follow: isProd },
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js'
};

export const VIEW_PORT: Viewport = {
  initialScale: 1,
  themeColor: 'black',
  colorScheme: 'dark',
  width: 'device-width'
};
