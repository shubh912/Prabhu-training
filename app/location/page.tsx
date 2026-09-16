import type { Metadata } from 'next';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'Location & Directions | Prabhu Motor Training School, Ayodhya',
  description:
    'Find Prabhu Motor Training School (Regd.) at Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya, Faizabad (U.P.). Get directions or call to visit.',
  path: '/location',
});

export default function LocationPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            Our Location in Ayodhya
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            {business.shortName} is located at Udaya Chauraha in Jalpa
            Colony, Amanigunj — in Ayodhya, Faizabad district, Uttar Pradesh.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 flex flex-col gap-5">
          <div className="border border-charcoal/15 bg-paperdim p-6">
            <h2 className="font-display text-xl uppercase tracking-tight text-charcoal mb-3">
              Complete Address
            </h2>
            <address className="not-italic font-body text-charcoal/85 leading-relaxed">
              {business.name}
              <br />
              {business.address.line1}
              <br />
              {business.address.line2}
            </address>
          </div>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal font-body font-semibold text-center py-4 hover:bg-gold-light transition-colors"
          >
            Get Directions on Google Maps
          </a>
          <a
            href={business.phoneHref}
            className="bg-maroon text-paper font-body font-semibold text-center py-4 hover:bg-maroon-dark transition-colors"
          >
            Call Now &middot; {business.phone}
          </a>
          <p className="font-body text-sm text-charcoal/70 leading-relaxed">
            We're easily reachable from across Ayodhya and Faizabad. If
            you're travelling from outside the city, use the Get Directions
            link above for turn-by-turn navigation to Udaya Chauraha.
          </p>
        </div>

        <div className="md:col-span-3 aspect-[4/3] w-full border border-charcoal/15">
          <iframe
            title={`Map showing the location of ${business.name}`}
            src={business.mapsEmbedSrc}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <CTA
        heading="Planning a Visit?"
        subheading="Call ahead to confirm timings before you visit our Ayodhya location."
      />
    </>
  );
}
