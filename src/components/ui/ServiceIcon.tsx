import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  Icon: LucideIcon;
}

export function ServiceIcon({ Icon }: ServiceIconProps) {
  return (
    <div className="flex justify-center">
      <Icon className="w-12 h-12 text-brand-darkTeal" />
    </div>
  );
} 