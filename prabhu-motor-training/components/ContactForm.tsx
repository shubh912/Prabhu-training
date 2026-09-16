'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const COURSE_OPTIONS = [
  'HMV Training',
  'LMV Training',
  'E-Rickshaw Training',
  'General Enquiry',
];

const PHONE_REGEX = /^[6-9]\d{9}$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate(data: {
    name: string;
    phone: string;
    course: string;
    message: string;
  }) {
    const errors: Record<string, string> = {};
    if (!data.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!data.phone.trim()) {
      errors.phone = 'Please enter your phone number.';
    } else if (!PHONE_REGEX.test(data.phone.trim())) {
      errors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!data.course) {
      errors.course = 'Please select a course.';
    }
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      course: String(formData.get('course') || ''),
      message: String(formData.get('message') || ''),
    };

    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        'Something went wrong while sending your enquiry. Please call us directly or try again.'
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 font-body"
      aria-describedby={status === 'error' ? 'form-error' : undefined}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="font-medium text-charcoal">
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? 'name-error' : undefined}
          className="border border-charcoal/25 bg-white px-4 py-3 focus:border-maroon outline-none"
        />
        {fieldErrors.name && (
          <p id="name-error" className="text-sm text-maroon">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="font-medium text-charcoal">
          Phone Number <span aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          required
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
          placeholder="10-digit mobile number"
          className="border border-charcoal/25 bg-white px-4 py-3 focus:border-maroon outline-none"
        />
        {fieldErrors.phone && (
          <p id="phone-error" className="text-sm text-maroon">
            {fieldErrors.phone}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="course" className="font-medium text-charcoal">
          Select Course <span aria-hidden="true">*</span>
        </label>
        <select
          id="course"
          name="course"
          required
          aria-required="true"
          aria-invalid={Boolean(fieldErrors.course)}
          aria-describedby={fieldErrors.course ? 'course-error' : undefined}
          defaultValue=""
          className="border border-charcoal/25 bg-white px-4 py-3 focus:border-maroon outline-none"
        >
          <option value="" disabled>
            Choose a course
          </option>
          {COURSE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {fieldErrors.course && (
          <p id="course-error" className="text-sm text-maroon">
            {fieldErrors.course}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="border border-charcoal/25 bg-white px-4 py-3 focus:border-maroon outline-none resize-y"
          placeholder="Tell us about your training requirements (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-maroon text-paper font-semibold py-3.5 px-6 hover:bg-maroon-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className="bg-green-50 border border-green-600/30 text-green-800 px-4 py-3">
            Thank you. Your enquiry has been sent — our team will contact you
            shortly. For an immediate response, please call{' '}
            <a href="tel:+918005022800" className="underline font-semibold">
              8005022800
            </a>
            .
          </p>
        )}
        {status === 'error' && (
          <p id="form-error" className="bg-red-50 border border-maroon/30 text-maroon px-4 py-3">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
