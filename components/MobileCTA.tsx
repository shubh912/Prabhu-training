import { business } from '@/lib/business';

export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 border-t border-charcoal/10">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 bg-maroon text-paper font-body font-semibold py-3.5 text-sm"
      >
        Call Now
      </a>
      <a
        href={business.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gold text-charcoal font-body font-semibold py-3.5 text-sm"
      >
        Get Directions
      </a>
    </div>
  );
}
