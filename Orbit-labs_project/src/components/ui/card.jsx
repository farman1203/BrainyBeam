import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

/** Card surface. `group/card` lets children (e.g. Badge) react to the card being hovered. */
function Card({ className, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'div';
  return (
    <Comp
      data-slot="card"
      className={cn('group/card rounded-2xl border border-solid border-border bg-card text-card-foreground', className)}
      {...props}
    />
  );
}

export { Card };
