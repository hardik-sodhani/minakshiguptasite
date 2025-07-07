// app/page.tsx or pages/index.tsx depending on your Next.js structure
'use client';

import HeroSplashStickyNav from '@/components/layout/HeroSplashStickyNav';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import TestimonialSlider from '@/components/sections/TestimonialSlider';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-beige text-brand-charcoal font-sans">
      <HeroSplashStickyNav />
      <Hero />
      <Services />
      <TestimonialSlider />
      <CTA />
    </main>
  );
}
