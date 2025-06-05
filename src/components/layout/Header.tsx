import Link from 'next/link';
import { navigation } from '@/data/content';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-wide">Minakshi Gupta</span>
      </div>
      <nav className="space-x-6 text-sm font-medium">
        {navigation.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            className="hover:text-brand-darkTeal transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
} 