import type { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'Driving License Training Guidance | Ayodhya',
  description:
    'Understand the difference between driving training and the government driving-license process, and how Prabhu Motor Training School (Regd.) can help you prepare.',
  path: '/license-training',
});

export default function LicenseTrainingPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            Driving License Training Guidance
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            A clear explanation of how our training relates to the official
            driving-license process — and where each responsibility lies.
          </p>
        </div>
      </section>

      <section className="container-page py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10 font-body text-charcoal/85 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              Driving Training vs. the License Process
            </h2>
            <p>
              It's important to understand that these are two separate
              things. {business.shortName} provides{' '}
              <strong>practical driving training</strong> — helping you learn
              to handle a vehicle safely and confidently. The{' '}
              <strong>driving license itself</strong> is issued by the
              government's licensing authority, following their own
              application process, tests and requirements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              What We Provide
            </h2>
            <p>
              We provide vehicle-specific training — HMV, LMV or E-Rickshaw —
              focused on practical skills: vehicle handling, road safety,
              traffic awareness and confident driving. Our team can also
              offer general guidance on what training is commonly expected
              before applying for a license, based on our experience running
              a registered driving school.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-maroon mb-3">
              What the Government Licensing Authority Handles
            </h2>
            <p>
              The application, examination, and issuance of a driving
              license are handled entirely by the relevant government
              transport/licensing authority (such as the Regional Transport
              Office). This includes eligibility rules, required documents,
              testing procedures and fees. These requirements can change, so
              we encourage every applicant to confirm current requirements
              directly with the licensing authority before applying.
            </p>
          </div>

          <div className="border-l-4 border-gold pl-5 bg-paperdim py-4">
            <p className="text-sm text-charcoal/80">
              {business.shortName} is a registered training school (License
              No. {business.licenseNumber}) and does not issue government
              driving licenses. We are happy to guide you on the training
              side — please contact us for details relevant to your
              situation.
            </p>
          </div>
        </div>

        <aside className="border border-charcoal/15 bg-paperdim p-6 h-fit">
          <h2 className="font-display text-xl uppercase tracking-tight text-charcoal mb-4">
            Questions About Training?
          </h2>
          <p className="font-body text-sm text-charcoal/70 mb-4">
            Contact us for guidance on which training course fits your goals.
          </p>
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
          </div>
        </aside>
      </section>

      <CTA
        heading="Talk to Us About Your Training Needs"
        subheading="We'll help you understand which course fits, and what to expect."
      />
    </>
  );
}
