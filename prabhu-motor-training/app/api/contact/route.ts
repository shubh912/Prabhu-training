import { NextRequest, NextResponse } from 'next/server';

const PHONE_REGEX = /^[6-9]\d{9}$/;
const VALID_COURSES = [
  'HMV Training',
  'LMV Training',
  'E-Rickshaw Training',
  'General Enquiry',
];

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const data = body as Record<string, unknown>;
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const course = typeof data.course === 'string' ? data.course.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';

  const errors: string[] = [];
  if (!name) errors.push('Name is required.');
  if (!phone || !PHONE_REGEX.test(phone)) {
    errors.push('A valid 10-digit Indian mobile number is required.');
  }
  if (!course || !VALID_COURSES.includes(course)) {
    errors.push('A valid course selection is required.');
  }
  if (name.length > 200 || message.length > 2000) {
    errors.push('Submitted values exceed the allowed length.');
  }

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(' ') }, { status: 422 });
  }

  // TODO: Connect this to a real backend — e.g. send an email/SMS
  // notification, or store the enquiry in a database or CRM.
  // This handler currently only validates and acknowledges the submission.
  // Example integrations to wire up later:
  //   - Send email via a transactional email provider
  //   - Forward to a Google Sheet / CRM via its API
  //   - Send an SMS/WhatsApp notification to the school's phone

  console.log('New enquiry received:', { name, phone, course, message });

  return NextResponse.json({ success: true });
}
