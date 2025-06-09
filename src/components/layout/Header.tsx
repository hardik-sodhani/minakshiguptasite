import Link from 'next/link';
import Image from 'next/image';
import { navigation } from '@/data/content';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 shadow-md bg-brand-charcoal sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <Image src="/icons/mglogo.png" alt="MG Logo" width={64} height={64} className="h-64 w-64 object-contain" />
        <span className="text-xl font-bold tracking-wide text-brand-mint">Minakshi Gupta</span>
      </div>
      <nav className="space-x-6 text-sm font-medium">
        {navigation.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className="text-brand-beige hover:text-brand-mint transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
} 