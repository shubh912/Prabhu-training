import { business } from '@/lib/business';

export default function MapSection({
  heading = 'Find Us in Ayodhya',
}: {
  heading?: string;
}) {
  return (
    <section aria-labelledby="map-heading" className="container-page py-14">
      <h2
        id="map-heading"
        className="font-display text-3xl md:text-4xl uppercase tracking-tight text-charcoal mb-6"
      >
        {heading}
      </h2>
      <div className="grid md:grid-cols-5 gap-6 items-start">
        <div className="md:col-span-2 flex flex-col gap-4">
          <p className="font-body font-semibold text-charcoal">
            {business.name}
          </p>
          <address className="not-italic font-body text-charcoal/80 leading-relaxed">
            {business.address.line1}
            <br />
            {business.address.line2}
          </address>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-charcoal font-body font-semibold px-6 py-3 text-center hover:bg-gold-light transition-colors"
            >
              Get Directions
            </a>
            <a
              href={business.phoneHref}
              className="bg-maroon text-paper font-body font-semibold px-6 py-3 text-center hover:bg-maroon-dark transition-colors"
            >
              Call Now
            </a>
          </div>
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
      </div>
    </section>
  );
}
