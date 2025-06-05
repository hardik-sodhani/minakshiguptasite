import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-center px-6 py-20 bg-brand-forest">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-beige">
        Weddings & Events Curated with Grace
      </h1>
      <p className="max-w-xl mx-auto text-lg text-brand-mint">
        Minakshi Gupta specializes in bespoke wedding and event planning across Hyderabad and India, delivering elegance with every detail.
      </p>
      <div className="mt-8">
        <Link 
          href="/contact" 
          className="bg-brand-mint text-brand-charcoal px-6 py-3 rounded-full font-semibold shadow hover:bg-brand-beige hover:text-brand-forest transition"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
} 