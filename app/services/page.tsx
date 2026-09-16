import type { Metadata } from 'next';
import CourseCard from '@/components/CourseCard';
import CTA from '@/components/CTA';
import { buildMetadata } from '@/lib/metadata';
import { courses } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'Driving Courses in Ayodhya | HMV, LMV & E-Rickshaw Training',
  description:
    'Explore HMV, LMV and E-Rickshaw driving training courses at Prabhu Motor Training School (Regd.) in Ayodhya. Choose the course that fits your vehicle.',
  path: '/services',
});

const comparisonRows = [
  {
    course: 'HMV Training',
    intendedFor: 'Those aiming to drive heavy commercial vehicles such as trucks and buses.',
    focus: 'Vehicle handling for larger vehicles, load awareness, road safety and traffic rules.',
  },
  {
    course: 'LMV Training',
    intendedFor: 'Beginners and license applicants who want to drive a car.',
    focus: 'Basic controls, steering, parking, and building confidence in traffic.',
  },
  {
    course: 'E-Rickshaw Training',
    intendedFor: 'Those planning to operate an E-Rickshaw for local commercial routes.',
    focus: 'Safe vehicle operation, passenger safety and responsible commercial driving.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            Driving Courses in Ayodhya
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            Prabhu Motor Training School (Regd.) offers three dedicated
            training tracks. Each is built around the vehicle you intend to
            drive, so training stays practical and relevant.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
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

      <section aria-labelledby="compare-heading" className="bg-paperdim">
        <div className="container-page py-14">
          <h2
            id="compare-heading"
            className="font-display text-3xl md:text-4xl uppercase tracking-tight text-charcoal mb-8"
          >
            Which Course Is Right for You?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-body text-sm">
              <thead>
                <tr className="text-left border-b-2 border-charcoal/20">
                  <th scope="col" className="py-3 pr-4 font-display text-lg uppercase tracking-tight text-maroon">
                    Course
                  </th>
                  <th scope="col" className="py-3 pr-4 font-semibold text-charcoal">
                    Intended For
                  </th>
                  <th scope="col" className="py-3 font-semibold text-charcoal">
                    Training Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.course} className="border-b border-charcoal/10 align-top">
                    <td className="py-4 pr-4 font-semibold text-charcoal whitespace-nowrap">
                      {row.course}
                    </td>
                    <td className="py-4 pr-4 text-charcoal/80">{row.intendedFor}</td>
                    <td className="py-4 text-charcoal/80">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTA
        heading="Contact Us to Discuss Your Training Requirements"
        subheading="Not sure which course fits you? Call us and we'll help you decide."
      />
    </>
  );
}
