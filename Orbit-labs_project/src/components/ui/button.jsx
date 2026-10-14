import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  [
    'group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full',
    'text-sm font-semibold outline-none select-none',
    'transition-[background-color,color,border-color,box-shadow,translate,scale] duration-300 ease-out',
    'focus-visible:ring-[3px] focus-visible:ring-ring/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-60 aria-disabled:pointer-events-none aria-disabled:opacity-60',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-[0_12px_28px_-10px_rgba(212,66,15,0.55)] hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_18px_34px_-10px_rgba(212,66,15,0.6)] active:translate-y-0 active:scale-[0.98]',
        outline:
          'border border-solid border-border bg-background text-foreground hover:-translate-y-0.5 hover:border-brand hover:text-primary-ink active:translate-y-0 active:scale-[0.98]',
        secondary:
          'bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-accent active:translate-y-0 active:scale-[0.98]',
        ghost: 'text-foreground hover:bg-accent',
        link: 'rounded-md text-foreground hover:text-primary-ink',
      },
      size: {
        default: 'h-11 px-6',
        sm: 'h-10 px-4 text-[13px]',
        lg: 'h-12 px-7 text-[15px]',
        icon: 'size-11',
        link: 'h-auto min-h-11 px-0.5',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
);

function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { Button, buttonVariants };
