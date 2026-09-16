'use client';

import Link from 'next/link';
import { useState } from 'react';
import { business, navLinks } from '@/lib/business';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-charcoal/10">
      <div className="container-page flex items-center justify-between py-3">
        <Link
          href="/"
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-2xl md:text-3xl uppercase tracking-tight text-maroon">
            Prabhu Motor Training School
          </span>
          <span className="text-[11px] md:text-xs text-charcoal/70 font-body">
            {business.tagline} &middot; {business.taglineHindi}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-6 font-body text-sm font-medium"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-charcoal hover:text-maroon transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 bg-maroon text-paper font-body font-semibold text-sm px-5 py-2.5 hover:bg-maroon-dark transition-colors"
          >
            Call Now &middot; {business.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden inline-flex flex-col justify-center items-center gap-1.5 w-11 h-11 border border-charcoal/20"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-charcoal/10 ${
          open ? 'max-h-[28rem]' : 'max-h-0'
        }`}
      >
        <nav aria-label="Mobile primary" className="container-page py-4 flex flex-col gap-1 font-body">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-base text-charcoal border-b border-charcoal/5 hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="mt-4 text-center bg-maroon text-paper font-semibold py-3"
          >
            Call Now &middot; {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
