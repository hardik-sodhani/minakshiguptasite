"use client";
import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/data/content';

const HERO_MIN_HEIGHT = 80;

export default function StickyNavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-beige shadow-md transition-all duration-500" style={{ minHeight: HERO_MIN_HEIGHT }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Image src="/icons/mglogocropped.png" alt="MG Logo" width={40} height={40} className="h-10 w-10 object-contain" />
        </div>
        <div className="space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-charcoal hover:text-brand-mint transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 