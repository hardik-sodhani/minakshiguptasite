import { services } from '@/data/content';

export default function Services() {
  return (
    <section className="bg-brand-beige py-16 px-6 text-center">
      <h2 className="text-2xl font-bold text-brand-darkTeal mb-8">Services</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-xl shadow-md max-w-sm mx-auto transition hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out border border-brand-mint"
          >
            <div className="mb-4">
              {/* Icon is already styled in ServiceIcon */}
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-brand-darkTeal mb-2">{service.title}</h3>
            <p className="text-sm text-brand-charcoal">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 