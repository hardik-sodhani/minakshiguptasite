import Image from 'next/image';
import CTA from '@/components/sections/CTA';

export default function AboutPage() {
  return (
    <main className="bg-brand-beige text-brand-charcoal">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col">
        {/* Hero Image */}
        <div className="relative w-full">
          <Image
            src="/images/aboutMeHero.png"
            alt="Minakshi Gupta full portrait"
            width={1920}
            height={720}
            className="w-full h-auto object-cover max-h-[60vh] md:max-h-[720px]"
            priority
          />
          {/* Hero Text Overlay - always absolute, with bg for mobile */}
          <div className="absolute inset-0 flex items-end md:items-start justify-start">
            <div className="bg-black bg-opacity-60 md:bg-opacity-0 p-4 md:p-0 max-w-full md:max-w-xl mb-6 md:mb-0 ml-0 md:ml-16 rounded md:rounded-none">
              <h1 className="text-3xl md:text-5xl font-heading font-medium mb-4 text-white drop-shadow-md">
                I&apos;m Minakshi
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-white drop-shadow-md">
                After twenty-five years of working with families on their most precious celebrations,
                I discovered something was missing. There was a gap before the planning begins when
                families need someone to guide them and bring crystal clear direction to what can feel
                overwhelming. That missing piece became my calling.
              </p>
            </div>
          </div>
        </div>

        {/* Beige Content Box */}
        <div className="relative z-10 bg-brand-beige bg-opacity-90 px-4 py-6 mt-4 md:absolute md:top-[35%] md:right-24 md:left-24 md:p-6 md:bg-opacity-60 md:mt-0">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            My journey in the Indian wedding industry has spanned over 25 years. I&apos;m originally from 
            Bangalore and now live in Hyderabad, where I&apos;ve been fortunate to grow alongside this 
            evolving industry. I co-founded Little Gestures in 2000, which began as a floral venture and 
            gradually grew into a trusted name for event décor and execution.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Over the years, I&apos;ve had the opportunity to collaborate with some wonderful planners, 
            including Devika Narain and Doli Diary, while quietly building my own path as someone who 
            works behind the scenes to bring weddings to life. My experience balancing aesthetics, cultural 
            nuance, working with teams to execute to perfection and allocating budgets has naturally led me toward consultancy.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
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
