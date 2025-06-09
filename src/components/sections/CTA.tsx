import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-brand-darkTeal text-center py-16 px-6">
      <h2 className="text-3xl font-bold mb-4 text-brand-beige">Ready to create your perfect wedding?</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8 text-brand-mint">
        Let&apos;s bring your wedding vision to life with cultural authenticity and flawless execution!
      </p>
      <div className="text-brand-beige">
        <span>
            Email: <a
              href="mailto:weddingsconsultancy@gmail.com"
              className="underline hover:text-brand-beige transition"
            >weddingsconsultancy@gmail.com</a>
            &nbsp;|&nbsp;
            Phone: <a
              href="https://wa.me/919396548547"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-beige transition"
            >+91 93965 48547</a>
          </span>
      </div>
    </section>
  );
} 