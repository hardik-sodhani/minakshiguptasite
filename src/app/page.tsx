// app/page.tsx or pages/index.tsx depending on your Next.js structure
'use client';

import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-beige text-brand-charcoal font-sans">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
