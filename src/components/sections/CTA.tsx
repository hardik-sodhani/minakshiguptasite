import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-brand-darkTeal text-center py-16 px-6">
      <h2 className="text-3xl font-bold mb-4 text-brand-beige">Let&apos;s Design Your Dream Celebration</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-brand-mint">
        From vendor planning to cultural styling, Minakshi Gupta curates weddings and events that reflect your traditions with elegance and flair.
      </p>
      <Link 
        href="/contact" 
        className="bg-brand-mint text-brand-charcoal px-8 py-3 rounded-full font-semibold shadow hover:bg-brand-beige hover:text-brand-darkTeal transition"
      >
        Contact Us
      </Link>
    </section>
  );
} 