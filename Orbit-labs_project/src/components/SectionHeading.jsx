import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

/** Kicker + h2 with an optional link on the right. `light` is for dark sections. */
function SectionHeading({ kicker, title, action, light = false, children }) {
  return (
    <Reveal>
      <div className={cn('section-head', light && 'light')}>
        <div>
          <span className="kicker">{kicker}</span>
          <h2>{title}</h2>
        </div>
        {action && (
          <Link className="round-link" to={action.to}>
            {action.label} <ArrowUpRight size={19} className="arrow-nudge" aria-hidden="true" />
          </Link>
        )}
        {children}
      </div>
    </Reveal>
  );
}

export default SectionHeading;
