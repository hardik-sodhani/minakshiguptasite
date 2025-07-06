import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="bg-brand-beige px-6 py-8 md:py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left - MG Logo (desktop only) */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-start">
          <Image
            src="/icons/mglogo.png" // Adjust if needed
            alt="MG Logo"
            width={300}
            height={300}
            className="w-auto h-auto max-w-[250px] md:max-w-[300px]"
          />
        </div>


        {/* Right - Text and Icons */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-heading font-bold text-brand-darkTeal mb-4 leading-snug">
            Reach out to <br className="hidden md:inline" /> book a call
          </h2>
          <p className="text-brand-charcoal mb-6 max-w-md mx-auto md:mx-0">
            MG Consultancy exists to offer calm in the chaos – the guide that protects your vision,
            your values, and your investment.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-2xl text-brand-darkTeal">
            <a
              href="https://instagram.com/mgweddingconsultancy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919396548547"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-green-600" />
            </a>
            <a href="mailto:weddingsconsultancy@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
