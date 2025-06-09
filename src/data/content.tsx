import React from 'react';
import { Testimonial, Service, NavItem } from '../types';
import { Diamond, Palette, Sparkles } from 'lucide-react';
import { ServiceIcon } from '../components/ui/ServiceIcon';

export const testimonials: Testimonial[] = [
  {
    quote: "Working with Minakshi was transformative for our temple wedding. Her deep understanding of cultural nuances and ability to seamlessly blend tradition with contemporary elegance made our celebration truly extraordinary.",
    author: "Vani Raju",
    role: "Ammapalli Temple Wedding"
  },
  {
    quote: "Minakshi's expertise in cultural consulting brought authenticity and depth to our bridal jewellery collections. Her insights into traditional motifs and contemporary preferences were invaluable to our design process.",
    author: "GRT Jewellers",
    role: "Cultural Consultant - Bridal Collections"
  },
  {
    quote: "From the USA, planning our daughter's wedding seemed daunting. Minakshi's guidance, attention to detail, and ability to coordinate with the best vendors made the entire process smooth and joyful.",
    author: "Raj & Padma Mantena",
    role: "Wedding Planning - USA to India"
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
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  // { label: "Contact", href: "/contact" }
]; 