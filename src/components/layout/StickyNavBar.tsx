"use client";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { navigation } from "@/data/content";

export default function StickyNavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-beige shadow-md transition-all duration-500">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        {/* Left - Social Icons */}
        <div className="flex items-center gap-4 text-xl text-brand-charcoal">
        <a href="https://instagram.com/mgweddingconsultancy" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-brand-charcoal text-xl hover:text-brand-mint transition" />
          </a>
          <a href="https://wa.me/919396548547" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-brand-charcoal text-xl hover:text-brand-mint transition" />
          </a>
        </div>

        {/* Center - Name and Navigation */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="text-lg tracking-wide font-heading uppercase">
            MINAKSHI GUPTA
          </Link>
          <div className="flex space-x-6 text-sm font-medium mt-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-darkTeal hover:text-brand-mint transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right - Schedule CTA */}
        <div>
          <Link
            href="/contact"
            className="bg-brand-darkTeal text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-brand-mint transition"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
