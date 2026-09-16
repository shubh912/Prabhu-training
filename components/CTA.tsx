import Link from 'next/link';
import { business } from '@/lib/business';

export default function CTA({
  heading,
  subheading,
}: {
  heading: string;
  subheading?: string;
}) {
  return (
    <section className="bg-maroon text-paper">
      <div className="container-page py-14 text-center flex flex-col items-center gap-4">
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight">
          {heading}
        </h2>
        {subheading && (
          <p className="font-body text-paper/85 max-w-xl">{subheading}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href={business.phoneHref}
            className="bg-gold text-charcoal font-body font-semibold px-7 py-3 hover:bg-gold-light transition-colors"
          >
            Call Now &middot; {business.phone}
          </a>
          <Link
            href="/contact"
            className="border border-paper/60 text-paper font-body font-semibold px-7 py-3 hover:bg-paper/10 transition-colors"
          >
            Send Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
