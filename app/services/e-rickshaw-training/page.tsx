import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'E-Rickshaw Training in Ayodhya | E-Rickshaw Driving Classes',
  description:
    'E-Rickshaw driving training in Ayodhya at Prabhu Motor Training School (Regd.). Learn safe operation, passenger safety and responsible commercial driving.',
  path: '/services/e-rickshaw-training',
});

export default function ERickshawTrainingPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <p className="font-body text-gold font-semibold text-sm mb-2">
            E-Rickshaw Driving Training
          </p>
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            E-Rickshaw Training in Ayodhya
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            Focused training for safe, responsible E-Rickshaw operation —
            built for local commercial routes around Ayodhya and Faizabad.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10 font-body text-charcoal/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              E-Rickshaw Driving Basics
            </h2>
            <p>
              E-Rickshaws are widely used for local passenger and goods
              transport across Ayodhya. This training introduces the
              vehicle's controls and handling characteristics, which differ
              from both two-wheelers and cars.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              What This Training Covers
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Vehicle controls</strong> — understanding the
                accelerator, braking and steering of an E-Rickshaw.
              </li>
              <li>
                <strong>Safe operation</strong> — driving at appropriate
                speeds and maintaining vehicle balance, especially with
                passengers on board.
              </li>
              <li>
                <strong>Road awareness</strong> — navigating narrow lanes and
                mixed traffic common on local Ayodhya routes.
              </li>
              <li>
                <strong>Traffic rules</strong> — following applicable traffic
                regulations for E-Rickshaw operation.
              </li>
              <li>
                <strong>Passenger safety</strong> — safe boarding, seating
                and driving practices when carrying passengers.
              </li>
              <li>
                <strong>Practical manoeuvring</strong> — turning, reversing
                and navigating tight spaces common in local markets and lanes.
              </li>
              <li>
                <strong>Parking</strong> — safe, considerate parking in
                designated areas.
              </li>
              <li>
                <strong>Responsible commercial driving</strong> — habits
                suited to daily commercial use of the vehicle.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-gold pl-5 bg-paperdim py-4">
            <p className="text-sm text-charcoal/80">
              Please note: this training does not guarantee licensing or
              employment outcomes. Requirements for operating an E-Rickshaw
              commercially should be confirmed with the relevant government
              transport authority. See our{' '}
              <Link href="/license-training" className="text-maroon underline decoration-gold underline-offset-4">
                license training information page
              </Link>{' '}
              for general guidance.
            </p>
          </div>
        </div>

        <aside className="border border-charcoal/15 bg-paperdim p-6 h-fit">
          <h2 className="font-display text-xl uppercase tracking-tight text-charcoal mb-4">
            Get Started
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href={business.phoneHref}
              className="bg-maroon text-paper font-semibold text-center py-3"
            >
              Call Now &middot; {business.phone}
            </a>
            <Link
              href="/contact"
              className="border border-charcoal/25 text-charcoal font-semibold text-center py-3 hover:bg-charcoal/5"
            >
              Send Enquiry
            </Link>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-maroon underline decoration-gold underline-offset-4 text-center py-1"
            >
              Get Directions
            </a>
          </div>
          <p className="text-sm text-charcoal/70 mt-5">
            Explore our other courses:{' '}
            <Link href="/services/hmv-training" className="text-maroon underline decoration-gold underline-offset-4">
              HMV Training
            </Link>{' '}
            &middot;{' '}
            <Link href="/services/lmv-training" className="text-maroon underline decoration-gold underline-offset-4">
              LMV Training
            </Link>
          </p>
        </aside>
      </section>

      <CTA heading="Interested in E-Rickshaw Training?" subheading="Call us to discuss timings and requirements." />
    </>
  );
}
