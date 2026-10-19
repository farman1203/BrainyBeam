import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { controlClasses } from './input';

/**
 * Styled native <select>. A native element keeps `name`/`required` working with the
 * existing EmailJS `sendForm` call and gives the best mobile picker.
 */
function NativeSelect({ className, children, ...props }) {
  return (
    <div data-slot="native-select-wrapper" className="relative w-full">
      <select
        data-slot="native-select"
        className={cn(controlClasses, 'h-12 appearance-none pr-10 invalid:text-muted-foreground [&>option]:text-foreground', className)}
        {...props}
      >
        {children}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
  
export { NativeSelect };
