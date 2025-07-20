import Image from 'next/image';
import CTA from '@/components/sections/CTA';

export default function AboutPage() {
  return (
    <main className="bg-brand-beige text-brand-charcoal">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[720px]">
        {/* Background Image */}
        <Image
          src="/images/aboutMeHero.png"
          alt="Minakshi Gupta full portrait"
          fill
          className="object-cover object-top"
          priority
        />


        {/* Overlayed Text Block */}
        <div className="absolute inset-0 flex items-end md:items-center justify-start md:justify-end z-10">
          <div className="bg-black bg-opacity-50 md:bg-transparent text-white p-4 md:p-8 max-w-xl md:max-w-md text-left md:text-left">
            <h1 className="text-3xl md:text-6xl font-heading font-medium mb-4">
              I&apos;m Minakshi
            </h1>
            <p className="text-sm md:text-lg leading-relaxed">
              After twenty-five years of working with families on their most precious celebrations,
              I discovered something was missing. There was a gap before the planning begins when
              families need someone to guide them and bring crystal clear direction to what can feel
              overwhelming. That missing piece became my calling.
            </p>
          </div>
        </div>
      </section>

      {/* Text Content Section */}
      <section className="relative z-10 px-4 py-8 md:px-24 bg-brand-beige bg-opacity-90">
        <div className="max-w-4xl mx-auto space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            My journey in the Indian wedding industry has spanned over 25 years.
            I&apos;m originally from Bangalore and now live in Hyderabad, where I&apos;ve been
            fortunate to grow alongside this evolving industry. I co-founded Little Gestures in 2000,
            which began as a floral venture and gradually grew into a trusted name for event décor
            and execution.
          </p>
          <p>
            Over the years, I&apos;ve had the opportunity to collaborate with some wonderful planners,
            including Devika Narain and Doli Diary, while quietly building my own path as someone
            who works behind the scenes to bring weddings to life. My experience balancing aesthetics,
            cultural nuance, working with teams to execute to perfection and allocating budgets has
            naturally led me toward consultancy.
          </p>
          <p>
            Since 2020, I&apos;ve been working as a wedding and culture consultant, supporting
            families and brands alike—whether it&apos;s been with Vani Raju on the Ammapalli Temple wedding,
            the NCC family, GRT Jewellers on their bridal collections, or Raj and Padma Mantena
            for their daughter&apos;s engagement. I care deeply about the Indian wedding space—both
            honoring its traditions and making space for new voices. I continue to stay closely
            involved, hoping to bridge generations and perspectives within this beautiful, ever-changing world.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
