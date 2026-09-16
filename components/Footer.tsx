import Link from 'next/link';
import { business, courses, footerLinks } from '@/lib/business';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper mt-16 pb-24 lg:pb-10">
      <div className="road-divider text-gold" />
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl uppercase tracking-tight">
            {business.shortName}
          </p>
          <p className="text-sm text-paper/70 mt-1">
            {business.tagline} &middot; {business.taglineHindi}
          </p>
          <address className="not-italic text-sm text-paper/80 mt-4 leading-relaxed">
            {business.address.line1}
            <br />
            {business.address.line2}
          </address>
          <a
            href={business.phoneHref}
            className="inline-block mt-3 text-gold font-semibold"
          >
            {business.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="font-display text-xl uppercase tracking-tight text-gold mb-3">
            Courses
          </p>
          <ul className="space-y-2 text-sm text-paper/80">
            {courses.map((course) => (
              <li key={course.slug}>
                <Link href={course.href} className="hover:text-gold">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-xl uppercase tracking-tight text-gold mb-3">
            Important Pages
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-paper/80">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm underline decoration-gold underline-offset-4 text-paper/80 hover:text-gold"
          >
            Get Directions on Google Maps
          </a>
        </div>
      </div>

      <div className="container-page pt-6 border-t border-paper/10 text-xs text-paper/50 flex flex-col md:flex-row md:justify-between gap-2">
        <p>
          &copy; {new Date().getFullYear()} {business.name}. All rights
          reserved.
        </p>
        <p>GSTIN: {business.gstin} &middot; License No. {business.licenseNumber}</p>
      </div>
    </footer>
  );
}
