import { business } from '@/lib/business';

const items = [
  {
    label: 'Government Recognized',
    value: business.taglineHindi,
  },
  {
    label: 'Registered Driving School',
    value: business.name,
  },
  {
    label: 'License Number',
    value: business.licenseNumber,
  },
  {
    label: 'License Valid Until',
    value: business.licenseValidUntil,
  },
  {
    label: 'GST Registered',
    value: business.gstin,
  },
];

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="bg-paperdim">
      <div className="container-page py-14">
        <h2
          id="trust-heading"
          className="font-display text-3xl md:text-4xl uppercase tracking-tight text-charcoal mb-8"
        >
          Registered &amp; Recognized
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-paper border-l-4 border-gold p-5"
            >
              <p className="font-body text-sm text-charcoal/60 mb-1">
                {item.label}
              </p>
              <p className="font-body font-semibold text-charcoal break-words">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
