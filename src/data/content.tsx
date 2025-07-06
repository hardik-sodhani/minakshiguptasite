import React from 'react';
import Image from 'next/image';
import { Testimonial, Service, NavItem } from '../types';
import { Diamond, Palette, Sparkles } from 'lucide-react';
import { ServiceIcon } from '../components/ui/ServiceIcon';

export const testimonials: Testimonial[] = [
  {
    quote: "I've known Minakshi since our college days, and it gives me great joy to support her as she launches her own event management venture. Meenakshi is known for her passion, integrity, deep knowledge of production, and exceptional reliability—qualities that are rare and invaluable in this industry. I have no doubt that every event she touches will reflect her signature blend of heart, precision, and style.",
    author: "Vani Raju",
    role: "Ammapalli Temple Wedding"
  },
  {
    quote: `Working with Minakshi has been nothing short of incredible. Her unwavering support in Hyderabad has been a cornerstone in helping us plan and execute numerous weddings with grace and precision. Her deep knowledge of the wedding industry, local vendors, and venues has consistently made our work smoother and more efficient. Minakshi doesn't just offer assistance—she becomes an essential partner in the process. Her attention to detail, reliability, and genuine commitment to each event have meant the world to us. We're truly grateful for everything she brings to the table and look forward to many more successful collaborations.`,
    author: "Devika Narain",
    role: "Wedding Planner"
  }
];

export const services: Service[] = [
  {
    icon: (
      <ServiceIcon>
        <Image
          src="/icons/puzzleicon.svg"
          alt="Puzzle Icon"
          width={96}
          height={96}
        />
      </ServiceIcon>
    ),
    title: "Event Consulting",
    description:
      "Strategic guidance and oversight to ensure your vision, budget, and vendors align. Bring your vision to life without any chaos.",
  },
  {
    icon: (
      <ServiceIcon>
        <Image
          src="/icons/creativeicon.svg"
          alt="Creative Icon"
          width={96}
          height={96}
        />
      </ServiceIcon>
    ),
    title: "Creative Team Assembly",
    description:
      "We curate the perfect creative team for your vision, bringing together vetted seasoned professionals and emerging talent for exceptional results.",
  },
  {
    icon: (
      <ServiceIcon>
        <Image
          src="/icons/budgeticon.svg"
          alt="Budget Icon"
          width={96}
          height={96}
        />
      </ServiceIcon>
    ),
    title: "Budget Fluency",
    description:
      "Get clarity on how to allocate your budget efficiently and how to make the most of it. Ensure every rupee works harder for your vision.",
  },
];

export const navigation = [
  { label: 'My Story', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact Us', href: '/contact' },
];
