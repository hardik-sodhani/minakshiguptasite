import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ServiceIconProps {
  Icon?: LucideIcon;
  children?: ReactNode;
}

export function ServiceIcon({ Icon, children }: ServiceIconProps) {
  return (
    <div className="flex justify-center">
      {Icon ? (
        <Icon className="w-16 h-16 text-brand-darkTeal" />
      ) : (
        children
      )}
    </div>
  );
}
