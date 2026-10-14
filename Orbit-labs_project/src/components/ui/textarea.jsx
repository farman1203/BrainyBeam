import { cn } from '@/lib/utils';
import { controlClasses } from './input';

function Textarea({ className, ...props }) {
  return <textarea data-slot="textarea" className={cn(controlClasses, 'min-h-32 py-3 leading-relaxed', className)} {...props} />;
}

export { Textarea };
