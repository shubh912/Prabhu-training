// Single source of truth for all business facts used across the site.
// Do not hardcode these values elsewhere — import from here so every
// page stays consistent if details ever need to be updated.

export const business = {
  name: 'Prabhu Motor Training School (Regd.)',
  shortName: 'Prabhu Motor Training School',
  tagline: 'Government Recognized',
  taglineHindi: 'सरकार द्वारा मान्यता प्राप्त',
  phone: '8005022800',
  phoneDisplay: '+91 80050 22800',
  phoneHref: 'tel:+918005022800',
  gstin: '09AVRPJ3630K2Z4',
  licenseNumber: 'UPZ072026DSL00008',
  licenseValidUntil: '20/08/2031',
  address: {
    line1: 'Udaya Chauraha, Jalpa Colony',
    line2: 'Amanigunj, Ayodhya, Faizabad (U.P.) 224001',
    full: 'Udaya Chauraha, Jalpa Colony, Amanigunj, Ayodhya, Faizabad (U.P.) 224001',
    city: 'Ayodhya',
    district: 'Faizabad',
    state: 'Uttar Pradesh',
    pincode: '224001',
    country: 'India',
  },
  mapsUrl: 'https://maps.app.goo.gl/ct9rjvArzcCCSAc28',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Prabhu+Motor+Training+School+Udaya+Chauraha+Jalpa+Colony+Amanigunj+Ayodhya&output=embed',
  siteUrl: 'https://www.prabhumotortrainingschool.in',
};

export const courses = [
  {
    slug: 'hmv-training',
    name: 'HMV Training',
    fullName: 'Heavy Motor Vehicle Training',
    shortDescription:
      'Structured training for trucks, buses and other heavy commercial vehicles, covering vehicle handling, road safety and traffic awareness.',
    href: '/services/hmv-training',
  },
  {
    slug: 'lmv-training',
    name: 'LMV Training',
    fullName: 'Light Motor Vehicle Training',
    shortDescription:
      'Practical car driving training for beginners and license applicants, from basic controls to confident on-road driving.',
    href: '/services/lmv-training',
  },
  {
    slug: 'e-rickshaw-training',
    name: 'E-Rickshaw Training',
    fullName: 'E-Rickshaw Driving Training',
    shortDescription:
      'Focused training on safe E-Rickshaw operation, passenger safety and responsible commercial driving for local routes.',
    href: '/services/e-rickshaw-training',
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/services' },
  { label: 'HMV Training', href: '/services/hmv-training' },
  { label: 'LMV Training', href: '/services/lmv-training' },
  { label: 'E-Rickshaw', href: '/services/e-rickshaw-training' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'All Courses', href: '/services' },
  { label: 'HMV Training', href: '/services/hmv-training' },
  { label: 'LMV Training', href: '/services/lmv-training' },
  { label: 'E-Rickshaw Training', href: '/services/e-rickshaw-training' },
  { label: 'License Training Guidance', href: '/license-training' },
  { label: 'Location & Map', href: '/location' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];
