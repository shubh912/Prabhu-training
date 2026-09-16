import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { business } from '@/lib/business';

export const metadata: Metadata = buildMetadata({
  title: 'Gallery | Prabhu Motor Training School, Ayodhya',
  description:
    'A look at training at Prabhu Motor Training School (Regd.) in Ayodhya. Photos to be added.',
  path: '/gallery',
});

const placeholders = [
  'Training vehicle',
  'HMV practical session',
  'LMV practical session',
  'E-Rickshaw practical session',
  'School premises',
  'Registration desk',
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-charcoal text-paper">
        <div className="road-divider text-gold" />
        <div className="container-page py-14">
          <h1 className="font-display uppercase text-5xl md:text-6xl tracking-tight">
            Gallery
          </h1>
          <p className="font-body text-paper/80 mt-4 max-w-2xl">
            Photos from {business.shortName} will appear here. This section
            currently shows placeholders — real photos can be dropped into{' '}
            <code className="bg-paper/10 px-1.5 py-0.5 rounded">
              /public/images/gallery/
            </code>{' '}
            and swapped in.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {placeholders.map((label) => (
            <div
              key={label}
              className="aspect-[4/3] border-2 border-dashed border-charcoal/25 bg-paperdim flex flex-col items-center justify-center text-center p-6"
            >
              <p className="font-body text-sm text-charcoal/60">
                Image placeholder
              </p>
              <p className="font-body font-semibold text-charcoal mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-charcoal/60 mt-8 max-w-2xl">
          To replace a placeholder: add the real photo to{' '}
          <code className="bg-charcoal/5 px-1.5 py-0.5 rounded">
            /public/images/gallery/
          </code>
          , then swap the placeholder block for a Next.js{' '}
          <code className="bg-charcoal/5 px-1.5 py-0.5 rounded">Image</code>{' '}
          component pointing at that file, with descriptive alt text.
        </p>
      </section>
    </>
  );
}
