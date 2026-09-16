import type { Metadata } from 'next';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import TrustSection from '@/components/TrustSection';
import MapSection from '@/components/MapSection';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { business, courses } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'Prabhu Motor Training School (Regd.) | Driving School in Ayodhya',
  description:
    'Government-recognized motor training school in Ayodhya offering HMV, LMV and E-Rickshaw driving training. Call 8005022800 to enquire.',
  path: '/',
});

const reasons = [
  {
    title: 'Government-Recognized Training',
    text: 'Operating under License No. UPZ072026DSL00008, valid until 20/08/2031, with GST registration on record.',
  },
  {
    title: 'Vehicle-Specific Training',
    text: 'Separate, focused training tracks for heavy vehicles, light vehicles and E-Rickshaws rather than one generic course.',
  },
  {
    title: 'Practical, Road-Based Learning',
    text: 'Training emphasises hands-on vehicle handling, traffic awareness and road safety alongside classroom guidance.',
  },
  {
    title: 'Local to Ayodhya',
    text: 'Based at Udaya Chauraha, Jalpa Colony, Amanigunj — easy to reach for residents across Ayodhya and Faizabad.',
  },
  {
    title: 'Licensing Guidance',
    text: 'General guidance on the driving-licence process, so you understand what steps typically follow your training.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-16 md:py-24 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <p className="font-body text-gold font-semibold text-sm mb-3">
              {business.tagline} &middot; {business.taglineHindi}
            </p>
            <h1 className="font-display uppercase text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
              Professional Motor Driving Training in Ayodhya
            </h1>
            <p className="font-body text-paper/80 text-lg mt-6 max-w-xl leading-relaxed">
              {business.name} provides structured HMV, LMV and E-Rickshaw
              driving training, designed to build real road confidence and
              safe driving habits for residents of Ayodhya and Faizabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={business.phoneHref}
                className="bg-gold text-charcoal font-body font-semibold px-7 py-3.5 text-center hover:bg-gold-light transition-colors"
              >
                Call Now &middot; {business.phone}
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-paper/50 text-paper font-body font-semibold px-7 py-3.5 text-center hover:bg-paper/10 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 border border-paper/15 bg-paper/5 p-6">
            <p className="font-display text-xl uppercase tracking-tight text-gold mb-4">
              Training Tracks
            </p>
            <ul className="flex flex-col divide-y divide-paper/10 font-body">
              {courses.map((course) => (
                <li key={course.slug} className="py-3 flex items-center justify-between gap-3">
                  <span>{course.name}</span>
                  <Link
                    href={course.href}
                    className="text-sm text-gold border-b border-gold/60 pb-0.5"
                  >
                    Details
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustSection />

      {/* COURSES */}
      <section aria-labelledby="courses-heading" className="container-page py-16">
        <h2
          id="courses-heading"
          className="font-display text-3xl md:text-4xl uppercase tracking-tight text-charcoal mb-2"
        >
          Our Training Courses
        </h2>
        <p className="font-body text-charcoal/70 max-w-2xl mb-8">
          Choose the training track that matches the vehicle you want to
          drive. Each course has its own dedicated page with full details.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.slug}
              name={course.name}
              fullName={course.fullName}
              description={course.shortDescription}
              href={course.href}
            />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section aria-labelledby="why-heading" className="bg-paperdim">
        <div className="container-page py-16">
          <h2
            id="why-heading"
            className="font-display text-3xl md:text-4xl uppercase tracking-tight text-charcoal mb-8"
          >
            Why Choose {business.shortName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="border-l-4 border-maroon pl-5 py-1">
                <p className="font-body font-semibold text-charcoal mb-1">
                  {reason.title}
                </p>
                <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MapSection heading="Visit Us in Ayodhya" />

      <CTA
        heading="Ready to Start Your Driving Training?"
        subheading="Call us to discuss course timings and requirements, or send an enquiry and our team will get back to you."
      />
    </>
  );
}
