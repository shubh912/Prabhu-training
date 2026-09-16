import Link from 'next/link';

export default function CourseCard({
  name,
  fullName,
  description,
  href,
}: {
  name: string;
  fullName: string;
  description: string;
  href: string;
}) {
  return (
    <div className="border border-charcoal/15 bg-white/40 p-6 flex flex-col h-full">
      <p className="font-display text-3xl uppercase tracking-tight text-maroon">
        {name}
      </p>
      <p className="text-sm text-charcoal/60 font-body mb-3">{fullName}</p>
      <p className="font-body text-charcoal/85 leading-relaxed flex-grow">
        {description}
      </p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 font-body font-semibold text-maroon border-b-2 border-gold w-fit pb-0.5 hover:text-maroon-dark"
      >
        Learn More
      </Link>
    </div>
  );
}
