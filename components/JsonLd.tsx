import { business } from '@/lib/business';

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: business.name,
    telephone: '+918005022800',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: 'IN',
    },
    hasMap: business.mapsUrl,
    url: business.siteUrl,
    taxID: business.gstin,
    description:
      'Government-recognized motor training school in Ayodhya offering HMV, LMV and E-Rickshaw driving training.',
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
