import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/** The whole card is a button (stretched) that calls `onOpen`, which opens the details modal. */
function ServiceCard({ icon: Icon, title, text, tags, index, onOpen }) {
  return (
    <Card asChild className="service-card card-lift">
      <article>
        <div className="service-icon">
          <Icon size={23} aria-hidden="true" />
        </div>
        <span className="service-number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3>{title}</h3>
        <p>{text}</p>
        <ul className="tags" aria-label={`${title} technologies`}>
          {tags.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
        {onOpen && (
          <button type="button" className="card-link" onClick={onOpen} aria-haspopup="dialog" aria-label={`${title}: view details`}>
            <ArrowUpRight className="service-arrow" size={21} aria-hidden="true" />
          </button>
        )}
      </article>
    </Card>
  );
}

export default ServiceCard;
