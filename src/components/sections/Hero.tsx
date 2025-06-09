import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative text-center px-6 py-20 min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/images/backgroundhero.jpg"
          alt="Wedding background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-brand-forest opacity-70" />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-beige">
          Weddings &amp; Events Curated with Grace
        </h1>
        <p className="max-w-xl mx-auto text-lg text-brand-mint">
          Minakshi Gupta specializes in bespoke wedding and event planning across Hyderabad and India, delivering elegance with every detail.
        </p>
      </div>
    </section>
  );
} 