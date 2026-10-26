export const siteConfig = {
  name: 'People & Pixel 360',
  shortName: 'P&P 360',
  description:
    'Media monitoring, public sentiment intelligence, and unified campaign tracking for Malaysia. Purpose-built with vernacular translation and multi-tenant PostgreSQL Row-Level Security.',
  url: 'https://pnp360.ai',
  logo: '/brand/pnp-360-logo.png',
  logoIcon: '/brand/pnp-360-logo.png',
  links: {
    bookDemo: '#book-demo',
    login: 'https://360.peoplenpixel.com/login',
    contactEmail: 'hello@peoplenpixel.com',
    supportEmail: 'support@peoplenpixel.com',
  },
  nav: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Manual vs. Automated', href: '#comparison' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'FAQ', href: '#faq' },
  ],
  vernacularMedia: [
    { name: 'Sin Chew Daily', native: '星洲日报', language: 'Mandarin' },
    { name: 'China Press', native: '中國報', language: 'Mandarin' },
    { name: 'Oriental Daily News', native: '東方日報', language: 'Mandarin' },
    { name: 'Nanyang Siang Pau', native: '南洋商报', language: 'Mandarin' },
    { name: 'Guang Ming Daily', native: '光明日報', language: 'Mandarin' },
    { name: 'See Hua Daily News', native: '詩華日報', language: 'Mandarin' },
    { name: 'Makkal Osai', native: 'மக்கள் ஓசை', language: 'Tamil' },
    { name: 'Vanakkam Malaysia', native: 'வணக்கம் மலேசியா', language: 'Tamil' },
  ],
  nationalMedia: [
    'The Star',
    'Malaysiakini',
    'Sinar Harian',
    'Astro Awani',
    'Berita Harian',
    'New Straits Times',
    'Free Malaysia Today',
  ],
} as const;

export type SiteConfig = typeof siteConfig;

