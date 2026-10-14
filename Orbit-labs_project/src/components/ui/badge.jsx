import { cn } from '@/lib/utils';

/**
 * Badge. Colours live in styles.css (.badge-*), not in Tailwind tokens, so they always render
 * correctly. Variants: muted (default), outline, light, dark, default (orange).
 */
function Badge({ className, variant = 'muted', ...props }) {
  return <span data-slot="badge" className={cn('badge', `badge-${variant}`, className)} {...props} />;
}

export { Badge };
