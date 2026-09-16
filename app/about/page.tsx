import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'About Us | Government-Recognized Driving School in Ayodhya',
  description:
    'Learn about Prabhu Motor Training School (Regd.), a government-recognized driving school in Ayodhya offering HMV, LMV and E-Rickshaw training.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <p className="font-body text-gold font-semibold text-sm mb-2">
            {business.tagline} &middot; {business.taglineHindi}
          </p>
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            About {business.shortName}
          </h1>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10 font-body text-charcoal/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              About the School
            </h2>
            <p>
              {business.name} is a registered motor training school based in
              Ayodhya, Faizabad district, Uttar Pradesh. The school works
              with residents who want structured, practical driving training
              across three vehicle categories: Heavy Motor Vehicles (HMV),
              Light Motor Vehicles (LMV) and E-Rickshaws.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              Our Training Approach
            </h2>
            <p>
              Training is organised around the specific vehicle a student
              intends to drive, rather than a single generic course. Sessions
              combine explanation of vehicle controls with supervised,
              practical driving time, along with guidance on road safety and
              traffic rules relevant to local conditions in Ayodhya and
              Faizabad.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              Available Training
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/services/hmv-training" className="text-maroon underline decoration-gold underline-offset-4">
                  HMV Training
                </Link>{' '}
                — for students interested in heavy commercial vehicles such
                as trucks and buses.
              </li>
              <li>
                <Link href="/services/lmv-training" className="text-maroon underline decoration-gold underline-offset-4">
                  LMV Training
                </Link>{' '}
                — car driving training from basic controls to on-road
                confidence.
              </li>
              <li>
                <Link href="/services/e-rickshaw-training" className="text-maroon underline decoration-gold underline-offset-4">
                  E-Rickshaw Training
                </Link>{' '}
                — focused training for safe, responsible E-Rickshaw
                operation.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              Registration &amp; Credentials
            </h2>
            <p>
              The school operates under License No.{' '}
              <strong>{business.licenseNumber}</strong>, valid until{' '}
              <strong>{business.licenseValidUntil}</strong>, and is GST
              registered under GSTIN <strong>{business.gstin}</strong>.
              Students are encouraged to verify current licensing
              requirements directly with the relevant government transport
              authority, as rules can change over time.
            </p>
          </div>
        </div>

        <aside className="border border-charcoal/15 bg-paperdim p-6 h-fit">
          <h2 className="font-display text-xl uppercase tracking-tight text-charcoal mb-4">
            Location
          </h2>
          <address className="not-italic font-body text-charcoal/80 leading-relaxed">
            {business.address.line1}
            <br />
            {business.address.line2}
          </address>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-maroon font-semibold underline decoration-gold underline-offset-4"
          >
            Get Directions
          </a>
          <a
            href={business.phoneHref}
            className="block mt-3 bg-maroon text-paper font-semibold text-center py-3"
          >
            Call Now &middot; {business.phone}
          </a>
        </aside>
      </section>

      <CTA
        heading="Have Questions About Our Training?"
        subheading="Call us directly or send an enquiry and our team will guide you."
      />
    </>
  );
}
