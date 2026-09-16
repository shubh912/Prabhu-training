import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'LMV Training in Ayodhya | Car Driving School in Faizabad',
  description:
    'LMV (Light Motor Vehicle) car driving training in Ayodhya at Prabhu Motor Training School (Regd.). Learn basic controls, road safety and confident on-road driving.',
  path: '/services/lmv-training',
});

export default function LmvTrainingPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <p className="font-body text-gold font-semibold text-sm mb-2">
            Light Motor Vehicle Training
          </p>
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            LMV Training in Ayodhya
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            Car driving training for beginners and license applicants,
            covering the basics through to confident, independent driving.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10 font-body text-charcoal/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              What Is LMV Training?
            </h2>
            <p>
              LMV training covers driving of light motor vehicles — cars and
              similar passenger vehicles. It's designed for people learning
              to drive for the first time as well as those who want to
              refresh their skills before applying for a driving license.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              Who May Benefit From LMV Training?
            </h2>
            <p>
              This course suits complete beginners, license applicants who
              want practical driving experience, and anyone in Ayodhya or
              Faizabad who wants to build confidence driving in local traffic
              conditions before driving independently.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              What LMV Training Generally Covers
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Basic vehicle controls</strong> — getting familiar
                with the steering, pedals and dashboard.
              </li>
              <li>
                <strong>Starting and stopping</strong> — smooth, controlled
                starts and stops in varied traffic conditions.
              </li>
              <li>
                <strong>Steering</strong> — precise control through turns,
                lane changes and tight spaces.
              </li>
              <li>
                <strong>Gear and control fundamentals</strong> — where
                applicable to the vehicle used for training.
              </li>
              <li>
                <strong>Road safety and traffic rules</strong> — understanding
                signals, right of way and safe driving habits.
              </li>
              <li>
                <strong>Parking and manoeuvring</strong> — reverse parking,
                three-point turns and tight-space manoeuvres.
              </li>
              <li>
                <strong>Road confidence</strong> — supervised practice on
                real roads to build comfort driving independently.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-gold pl-5 bg-paperdim py-4">
            <p className="text-sm text-charcoal/80">
              Please note: completing training does not by itself guarantee
              approval of a driving license. License issuance is decided by
              the relevant government transport authority. See our{' '}
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
            <Link href="/services/e-rickshaw-training" className="text-maroon underline decoration-gold underline-offset-4">
              E-Rickshaw Training
            </Link>
          </p>
        </aside>
      </section>

      <CTA heading="Ready to Learn to Drive?" subheading="Call us to discuss timings and requirements." />
    </>
  );
}
