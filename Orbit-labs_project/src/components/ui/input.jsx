import { cn } from '@/lib/utils';

/** Shared control styling, also used by Textarea and NativeSelect. */
export const controlClasses = [
  'w-full min-w-0 rounded-lg border border-solid border-input bg-background px-3.5 text-base text-foreground shadow-xs md:text-sm',
  'transition-[color,box-shadow,border-color] duration-200 outline-none',
  'placeholder:text-muted-foreground',
  'hover:border-foreground/30',
  'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20',
  'aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/15',
  'disabled:cursor-not-allowed disabled:opacity-60',
].join(' ');

function Input({ className, type, ...props }) {
  return <input type={type} data-slot="input" className={cn(controlClasses, 'h-12', className)} {...props} />;
}

export { Input };
