import type { Metadata } from 'next';
import { business } from './business';

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${business.siteUrl}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.shortName,
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}
