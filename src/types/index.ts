import { ReactNode } from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
} 