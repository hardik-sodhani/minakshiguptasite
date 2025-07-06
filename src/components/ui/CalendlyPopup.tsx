'use client';

import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

export default function CalendlyPopup() {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootEl(document.body); // Only runs on client
  }, []);

  if (!rootEl) return null; // Prevent SSR crash

  return (
    <PopupButton
      url="https://calendly.com/minakshigupta/discovery-call"
      rootElement={rootEl}
      text="Schedule a Free Consultation"
      className="inline-block bg-brand-beige text-brand-charcoal px-6 py-3 rounded-md shadow hover:bg-brand-mint transition mt-64 md:mt-0"
    />
  );
}
