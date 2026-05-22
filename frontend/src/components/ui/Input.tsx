import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label to render as floating label.
   */
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {label && (
          <label className="absolute left-3 top-[-0.6rem] text-xs text-neon-cyan bg-black/40 px-1 rounded transition-all peer-focus:-translate-y-1.5 peer-focus:text-neon-purple">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'peer w-full rounded-xl bg-black/30 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-neon-cyan focus:shadow-neon focus:ring-2 focus:ring-neon-purple transition-all',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input'; // FIXED: stronger focus glow
export { Input };
