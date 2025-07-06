'use client';

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { navigation } from "@/data/content";

export default function StickyNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-beige shadow-md transition-all duration-500">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        {/* Left - Social Icons */}
        <div className="flex items-center gap-4 text-xl text-brand-charcoal">
          <a href="https://instagram.com/mgweddingconsultancy" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-brand-mint transition" />
          </a>
          <a href="https://wa.me/919396548547" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-brand-mint transition" />
          </a>
        </div>

        {/* Center - Name and Navigation */}
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="text-lg tracking-wide font-heading uppercase text-brand-charcoal hover:text-brand-mint transition-colors">
            MINAKSHI GUPTA
          </Link>
          <div className="hidden md:flex space-x-6 text-sm font-medium mt-1">
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

        {/* Right - Hamburger Menu (Mobile) / CTA (Desktop) */}
        <div className="flex items-center">
          {/* Mobile: Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-4 text-2xl text-brand-charcoal"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop: Schedule Button */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-brand-darkTeal text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-brand-mint transition"
          >
            Schedule a Call
          </Link>
        </div>
      </div>

      {/* Mobile - Dropdown Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-brand-beige px-6 pb-4 flex flex-col gap-3 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-darkTeal hover:text-brand-mint transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
