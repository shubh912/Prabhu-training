import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'HMV Training in Ayodhya | Heavy Motor Vehicle Driving School',
  description:
    'HMV (Heavy Motor Vehicle) training in Ayodhya at Prabhu Motor Training School (Regd.). Practical training in vehicle handling, road safety and traffic awareness.',
  path: '/services/hmv-training',
});

export default function HmvTrainingPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <p className="font-body text-gold font-semibold text-sm mb-2">
            Heavy Motor Vehicle Training
          </p>
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            HMV Training in Ayodhya
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            Structured training for those who want to drive heavy commercial
            vehicles such as trucks and buses, with a focus on safe handling
            and traffic awareness.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10 font-body text-charcoal/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              What Is HMV Training?
            </h2>
            <p>
              HMV training prepares students to operate heavy motor vehicles
              — vehicles that are larger, heavier and handle differently
              from a standard car. This includes trucks, buses and similar
              commercial vehicles used widely across Uttar Pradesh for goods
              transport and passenger travel.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              Who May Need HMV Training?
            </h2>
            <p>
              This training is generally suited to individuals who intend to
              work as commercial heavy-vehicle drivers, transport operators
              looking to build driving skills, or anyone who needs to
              understand safe handling of larger vehicles before applying for
              an HMV driving license.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              What HMV Training Generally Covers
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Vehicle handling</strong> — understanding the
                controls, dimensions and turning behaviour of heavy vehicles.
              </li>
              <li>
                <strong>Road safety</strong> — safe following distance,
                braking behaviour and hazard awareness specific to heavy
                vehicles.
              </li>
              <li>
                <strong>Traffic awareness</strong> — navigating mixed traffic
                conditions common on Ayodhya and Faizabad roads.
              </li>
              <li>
                <strong>Practical driving skills</strong> — supervised
                on-road practice to build comfort and control.
              </li>
              <li>
                <strong>Basic vehicle knowledge</strong> — an introduction to
                how a heavy vehicle differs from a car in terms of weight,
                braking and manoeuvring.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              Training Process
            </h2>
            <p>
              Training typically begins with an orientation to the vehicle
              and its controls, followed by supervised practical sessions
              that gradually build toward independent, confident driving.
              The pace of training can vary from student to student depending
              on prior driving experience.
            </p>
          </div>

          <div className="border-l-4 border-gold pl-5 bg-paperdim py-4">
            <p className="text-sm text-charcoal/80">
              Please note: completing training at {business.shortName} does
              not by itself guarantee approval of a driving license. License
              issuance is decided by the relevant government transport
              authority based on their own tests and requirements. For
              official licensing guidance, see our{' '}
              <Link href="/license-training" className="text-maroon underline decoration-gold underline-offset-4">
                license training information page
              </Link>
              .
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
            <Link href="/services/lmv-training" className="text-maroon underline decoration-gold underline-offset-4">
              LMV Training
            </Link>{' '}
            &middot;{' '}
            <Link href="/services/e-rickshaw-training" className="text-maroon underline decoration-gold underline-offset-4">
              E-Rickshaw Training
            </Link>
          </p>
        </aside>
      </section>

      <CTA heading="Interested in HMV Training?" subheading="Call us to discuss timings and requirements." />
    </>
  );
}
