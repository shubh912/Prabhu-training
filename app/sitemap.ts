import type { MetadataRoute } from 'next';
import { business } from '@/lib/business';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/services/hmv-training',
    '/services/lmv-training',
    '/services/e-rickshaw-training',
    '/license-training',
    '/contact',
    '/location',
    '/faq',
    '/gallery',
  ];

  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }));
}
