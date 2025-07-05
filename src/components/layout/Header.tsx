import Link from 'next/link';
import Image from 'next/image';
import { navigation } from '@/data/content';

export default function Header() {
  return (
    <header className="bg-brand-beige text-brand-charcoal py-4 px-6 border-b border-gray-200">
      <div className="flex justify-center">
        <Image src="/icons/mglogocropped.png" alt="MG Logo" width={60} height={60} />
      </div>
      <div className="mt-2 flex justify-center items-center space-x-8 text-sm font-medium">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-brand-forest hover:text-brand-mint transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="ml-4 px-4 py-2 bg-brand-darkTeal text-white rounded-md hover:bg-brand-mint transition"
        >
          Schedule a Call
        </Link>
        test
      </div>
    </header>
  );
}
