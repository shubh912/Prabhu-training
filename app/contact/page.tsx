import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us | Prabhu Motor Training School, Ayodhya',
  description:
    'Contact Prabhu Motor Training School (Regd.) in Ayodhya. Call 8005022800 or send an enquiry about HMV, LMV or E-Rickshaw driving training.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            Contact Us
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            Call us directly for the fastest response, or send an enquiry and
            our team will get back to you.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="border border-charcoal/15 bg-paperdim p-6">
            <h2 className="font-display text-xl uppercase tracking-tight text-charcoal mb-4">
              Business Details
            </h2>
            <dl className="font-body text-sm text-charcoal/85 space-y-3">
              <div>
                <dt className="text-charcoal/60">Business Name</dt>
                <dd className="font-semibold">{business.name}</dd>
              </div>
              <div>
                <dt className="text-charcoal/60">Phone</dt>
                <dd>
                  <a href={business.phoneHref} className="font-semibold text-maroon">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-charcoal/60">Address</dt>
                <dd>{business.address.full}</dd>
              </div>
              <div>
                <dt className="text-charcoal/60">GSTIN</dt>
                <dd>{business.gstin}</dd>
              </div>
              <div>
                <dt className="text-charcoal/60">License Number</dt>
                <dd>{business.licenseNumber}</dd>
              </div>
              <div>
                <dt className="text-charcoal/60">License Validity</dt>
                <dd>{business.licenseValidUntil}</dd>
              </div>
            </dl>
          </div>

          <a
            href={business.phoneHref}
            className="bg-maroon text-paper font-body font-semibold text-center py-4"
          >
            Call Now &middot; {business.phone}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-charcoal/25 text-charcoal font-body font-semibold text-center py-4 hover:bg-charcoal/5"
          >
            Get Directions
          </a>
        </div>

        <div className="lg:col-span-3 border border-charcoal/15 p-6 md:p-8">
          <h2 className="font-display text-xl uppercase tracking-tight text-charcoal mb-5">
            Send an Enquiry
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
