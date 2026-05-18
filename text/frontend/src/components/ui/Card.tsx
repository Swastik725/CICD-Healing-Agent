import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional className */
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-8 shadow-glass border border-white/10 backdrop-blur-xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
