'use client';

import Image from 'next/image';
import CalendlyPopup from '../ui/CalendlyPopup';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/minakshi-hero.jpg"
        alt="Minakshi Gupta"
        fill
        priority
        className="object-cover object-[center_top] md:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-start md:items-center justify-start px-6 md:px-16 pt-16 md:pt-0">
        <div className="text-white max-w-lg">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
            Your advocate in<br />every detail
          </h1>
          <p className="text-base md:text-lg mb-6">
            Consultancy that matches you with the right vendors, guides decisions &amp; ensures your celebration begins with clarity
          </p>
          <CalendlyPopup />
        </div>
      </div>
    </section>
  );
}
