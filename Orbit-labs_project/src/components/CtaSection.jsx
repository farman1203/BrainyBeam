import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from './Reveal';

/** Closing call-to-action panel shared by every page, sitting just above the footer. */
function CtaSection({ kicker, title, text, label = 'Start a project', to = '/contact' }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal>
          <div className="cta-panel">
            <span className="kicker">{kicker}</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <Button asChild size="lg">
              <Link to={to}>
                {label} <ArrowUpRight size={18} className="arrow-nudge" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaSection;
