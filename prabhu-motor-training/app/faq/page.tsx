import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import FaqJsonLd from '@/components/FaqJsonLd';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions | Prabhu Motor Training School',
  description:
    'Answers to common questions about HMV, LMV and E-Rickshaw driving training at Prabhu Motor Training School (Regd.) in Ayodhya.',
  path: '/faq',
});

const faqs = [
  {
    question: 'What driving courses are available?',
    answer:
      'We offer three dedicated training tracks: HMV (Heavy Motor Vehicle) training, LMV (Light Motor Vehicle / car) training, and E-Rickshaw training.',
  },
  {
    question: 'Do you provide HMV training?',
    answer:
      'Yes. Our HMV training covers vehicle handling, road safety, traffic awareness and practical driving skills for heavy commercial vehicles such as trucks and buses.',
  },
  {
    question: 'Do you provide LMV training?',
    answer:
      'Yes. Our LMV training covers basic vehicle controls, steering, parking, road safety and practical on-road driving for cars and similar light vehicles.',
  },
  {
    question: 'Do you provide E-Rickshaw training?',
    answer:
      'Yes. Our E-Rickshaw training covers safe vehicle operation, passenger safety, traffic rules and responsible commercial driving practices.',
  },
  {
    question: 'Where is Prabhu Motor Training School located?',
    answer:
      'We are located at Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya, Faizabad (U.P.) 224001.',
  },
  {
    question: 'How can I contact the school?',
    answer:
      'You can call us directly at 8005022800, or fill out the enquiry form on our Contact page and our team will get back to you.',
  },
  {
    question: 'How can I get directions?',
    answer:
      'You can use our Google Maps link on the Location or Contact page for turn-by-turn directions to our Ayodhya location.',
  },
  {
    question: 'What documents or requirements are needed for licensing?',
    answer:
      'Document and eligibility requirements for a driving license are set by the government transport/licensing authority and can change over time. We recommend confirming current requirements directly with that authority. Our License Training page explains how our training relates to the licensing process.',
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            Common questions about training courses, location and getting in
            touch with {business.shortName}.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="max-w-3xl mx-auto flex flex-col divide-y divide-charcoal/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-body font-semibold text-charcoal">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="text-gold text-xl shrink-0 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="font-body text-charcoal/75 mt-3 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
        <p className="text-center font-body text-sm text-charcoal/60 mt-10">
          Still have questions? Visit our{' '}
          <Link href="/contact" className="text-maroon underline decoration-gold underline-offset-4">
            Contact page
          </Link>{' '}
          or call us directly.
        </p>
      </section>

      <CTA heading="Didn't Find Your Answer?" subheading="Call us and we'll be happy to help." />
    </>
  );
}
