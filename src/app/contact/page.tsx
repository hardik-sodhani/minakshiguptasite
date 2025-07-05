import Head from 'next/head';
import Script from 'next/script';

export default function ContactPage() {
  return (
    <main className="bg-brand-beige min-h-screen py-16 px-4 pt-24">
      <Head>
        <title>Contact | Minakshi Gupta</title>
        <meta name="description" content="Contact Minakshi Gupta for wedding and event consultancy. Schedule a discovery call directly through the calendar." />
      </Head>
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-forest text-center mb-6">Contact</h1>
        <p className="text-lg text-brand-charcoal text-center mb-10">
          Interested in working with Minakshi Gupta or have questions about wedding and event consultancy? Use the calendar below to schedule a free discovery call at your convenience. We look forward to connecting with you!
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl" style={{ minWidth: 320, height: 700 }}>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/minakshigupta/discovery-call"
                data-layout="2_column"
                style={{ minWidth: 320, height: 700 }}
            ></div>
          </div>
        </div>
      </section>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </main>
  );
} 