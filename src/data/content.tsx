import React from 'react';
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
    icon: <ServiceIcon Icon={Diamond} />,
    title: "Wedding Consulting",
    description: "Comprehensive wedding planning guidance, from vendor selection to cultural integration, ensuring your celebration reflects your unique story and traditions."
  },
  {
    icon: <ServiceIcon Icon={Palette} />,
    title: "Cultural Consulting",
    description: "Expert guidance on incorporating authentic cultural elements, traditions, and rituals into modern celebrations with sensitivity and style."
  },
  {
    icon: <ServiceIcon Icon={Sparkles} />,
    title: "Creative Team Assembly",
    description: "Curating the perfect creative team for your vision, bringing together seasoned professionals and emerging talent for exceptional results."
  }
];

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" }
]; 