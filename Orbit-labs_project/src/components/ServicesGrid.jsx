import { useCallback, useState } from 'react';
import Reveal from './Reveal';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

/** Grid of service cards; clicking a card opens its details modal. */
function ServicesGrid({ items }) {
  const [selected, setSelected] = useState(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <>
      <div className="service-grid">
        {items.map((service, i) => (
          <Reveal key={service.title} delay={(i % 2) * 0.08}>
            <ServiceCard {...service} index={i} onOpen={() => setSelected(service)} />
          </Reveal>
        ))}
      </div>
      <ServiceModal service={selected} onClose={close} />
    </>
  );
}

export default ServicesGrid;
