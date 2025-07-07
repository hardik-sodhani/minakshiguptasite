import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  
    {
        name: 'Vani Raju',
        role: 'Client | Hyderabad, Telangana',
        image: '/images/VaniRaju.png', 
        text: `Minakshi is known for her passion, integrity, deep knowledge of production, and exceptional reliability—qualities that are rare and invaluable in this industry. I have no doubt that every event she touches will reflect her signature blend of heart, precision, and style.`,
      },
      {
        name: 'Devika Narain',
        role: 'Designer & Vendor',
        image: '/images/devikanarain.png', 
        text: `Working with Minakshi has been nothing short of incredible. Her unwavering support in Hyderabad has been a cornerstone in helping us plan and execute numerous weddings with grace and precision. Her deep knowledge of the wedding industry, local vendors, and venues has consistently made our work smoother and more efficient. Minakshi doesn’t just offer assistance, she becomes an essential partner in the process.`,
      },      
  // Add more testimonial objects if needed
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative bg-brand-beige py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row relative z-10 bg-white">
        {/* Vertical Label */}
        <div className="hidden lg:flex items-center justify-center px-4 rotate-[-90deg] absolute top-1/2 left-0 transform -translate-y-1/2 origin-left text-brand-darkTeal font-heading tracking-widest text-lg">
          TESTIMONIALS
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 h-auto">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={600}
            height={600}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 bg-brand-darkTeal text-white p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-heading mb-2">{testimonial.name}</h3>
          <p className="italic mb-4">{testimonial.role}</p>
          <p className="text-lg leading-relaxed">{testimonial.text}</p>
        </div>
      </div>

      {/* Bottom overlay rectangle */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-brand-mint opacity-50 z-0" />

      {/* Slider controls */}
      <div className="absolute bottom-8 left-4 z-20">
        <button
          onClick={prevSlide}
          className="bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        >
          <FaChevronLeft className="text-xl text-brand-darkTeal" />
        </button>
      </div>
      <div className="absolute bottom-8 right-4 z-20">
        <button
          onClick={nextSlide}
          className="bg-white/70 hover:bg-white rounded-full p-2 shadow-md"
        >
          <FaChevronRight className="text-xl text-brand-darkTeal" />
        </button>
      </div>
    </section>
  );
}
