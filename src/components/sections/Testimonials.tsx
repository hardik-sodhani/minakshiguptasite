import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section id="testimonials" className="bg-brand-charcoal py-16 px-6 text-center">
      <h2 className="text-2xl font-bold text-brand-mint mb-10">Client Testimonials</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="bg-brand-beige p-8 rounded-xl shadow-md min-h-[200px] relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-darkTeal hover:text-brand-forest p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-darkTeal"
            aria-label="Previous testimonial"
            style={{ zIndex: 2 }}
          >
            <ChevronLeft size={32} />
          </button>
          {/* Testimonial Content */}
          <div className="flex-1 px-8">
            <blockquote className="italic text-brand-charcoal text-lg">
              &quot;{testimonials[current].quote}&quot;
            </blockquote>
            <p className="mt-4 font-bold text-brand-forest">{testimonials[current].author}</p>
            <p className="text-sm text-brand-charcoal">{testimonials[current].role}</p>
          </div>
          {/* Right Arrow */}
          <button
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-darkTeal hover:text-brand-forest p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-darkTeal"
            aria-label="Next testimonial"
            style={{ zIndex: 2 }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
} 