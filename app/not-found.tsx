import Link from 'next/link';
import { business } from '@/lib/business';

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center flex flex-col items-center gap-5">
      <p className="font-display text-7xl text-maroon">404</p>
      <h1 className="font-display text-3xl uppercase tracking-tight text-charcoal">
        Page Not Found
      </h1>
      <p className="font-body text-charcoal/70 max-w-md">
        The page you're looking for doesn't exist. Try one of the links
        below, or call us directly.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        <Link href="/" className="bg-maroon text-paper font-semibold px-6 py-3">
          Back to Homepage
        </Link>
        <a href={business.phoneHref} className="border border-charcoal/25 font-semibold px-6 py-3">
          Call Now &middot; {business.phone}
        </a>
      </div>
    </section>
  );
}
