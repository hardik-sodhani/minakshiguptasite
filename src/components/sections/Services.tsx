import { services } from '@/data/content';

export default function Services() {
  return (
    <section id="services" className="bg-brand-beige py-16 px-6 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-heading font-bold text-brand-charcoal mb-4">Work with Minakshi</h2>
      <p className="text-lg font-heading text-brand-darkTeal max-w-3xl mx-auto mb-12">
        A consultant can be the difference between a whirlwind and an event that feels grounded,
        thoughtful, and truly yours.
      </p>

      {/* Service Cards */}
      <div className="pt-12 flex flex-col md:flex-row justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-brand-lightBeige p-8 pt-16 rounded-xl shadow-md max-w-sm mx-auto transition hover:shadow-lg hover:-translate-y-1 duration-300 ease-in-out border-b-4 border-brand-darkTeal relative"
          >
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              {service.icon}
            </div>
            <h3 className="text-xl font-heading text-brand-charcoal mb-2">{service.title}</h3>
            <p className="text-brand-darkTeal text-sm font-heading">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
