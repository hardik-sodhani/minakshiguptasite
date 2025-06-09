import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="bg-brand-beige min-h-screen py-16 px-4">
            <section className="max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-brand-forest text-center mb-10">About Minakshi</h1>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
                    {/* Photo section */}
                    <div className="flex-shrink-0 w-64 h-64 rounded-2xl bg-gray-100 shadow-md flex items-center justify-center overflow-hidden">
                        {/* Replace src with actual photo when available */}
                        <span className="text-gray-400 text-lg">Professional Photo</span>
                    </div>
                    {/* Bio section */}
                    <div className="flex-1 text-brand-charcoal text-lg">
                        <h2 className="text-2xl font-bold text-brand-forest mb-4">Two and a Half Decades of Wedding Excellence</h2>
                        <p className="mb-4">
                            Minakshi's journey in the Indian wedding industry spans over two and a half decades. A Bangalore native, she now calls Hyderabad home. Minakshi co-founded Little Gestures in 2000, growing it from a floral venture into a leading name in event décor and execution. Over the years, she's collaborated with renowned planners like Devika Narain and Doli Diary, while steadily carving her niche as a behind-the-scenes strategist.
                        </p>
                        <p className="mb-4">
                            Her deep understanding of client sensibilities—balancing aesthetic, cultural nuances, and budget—has naturally led her into consultancy. Since 2020, Minakshi has taken on the role of a wedding and culture consultant, lending her expertise to families and brands such as Vani Raju for the Ammapalli Temple wedding, NCC Family, GRT Jewellers as a cultural consultant for bridal jewellery collections, and Raj and Padma Mantena (USA) for their daughter's wedding.
                        </p>
                        <p>
                            Minakshi is known for her ability to put together the right creative teams, streamline execution, and deliver deeply personalized experiences. Passionate about bringing together industry stalwarts while creating room for young talent, she remains actively engaged with the ever-evolving landscape of the Indian wedding industry.
                        </p>
                    </div>
                </div>
                {/* Decorative divider */}
                <div className="mt-16 flex justify-center">
                    <div className="w-32 h-1 rounded-full bg-brand-mint opacity-60" />
                </div>
            </section>
        </main>
    );
} 