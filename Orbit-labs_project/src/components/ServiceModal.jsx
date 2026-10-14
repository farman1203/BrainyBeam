import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence, m } from 'motion/react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const EASE = [0.22, 1, 0.36, 1];

function Panel({ service, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const Icon = service.icon;

  // Modal behaviour: lock page scroll, move focus in, trap Tab, close on Escape, restore focus on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll('a[href], button:not([disabled])')];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.();
    };
  }, []);

  return (
    <m.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <m.div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Close service details">
          <X size={20} aria-hidden="true" />
        </button>

        <div className="service-icon modal-icon">
          <Icon size={23} aria-hidden="true" />
        </div>
        <span className="kicker">SERVICE</span>
        <h2 id="service-modal-title" className="modal-title">{service.title}</h2>
        <p className="modal-lead">{service.details.overview}</p>

        <p className="modal-sub">What we deliver</p>
        <ul className="modal-list">
          {service.details.deliver.map((item) => (
            <li key={item}>
              <span className="modal-check" aria-hidden="true"><Check size={14} /></span>
              {item}
            </li>
          ))}
        </ul>

        <p className="modal-sub">Technologies</p>
        <ul className="tags modal-tags">
          {service.tags.map((tag) => (
            <li key={tag}><Badge>{tag}</Badge></li>
          ))}
        </ul>

        <div className="modal-actions">
          <Button asChild size="lg">
            <Link to="/contact">
              Discuss this service <ArrowUpRight size={18} className="arrow-nudge" aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" onClick={onClose}>Close</Button>
        </div>
      </m.div>
    </m.div>
  );
}

/** Renders the details modal for `service` (or nothing when null). */
function ServiceModal({ service, onClose }) {
  return createPortal(
    <AnimatePresence>{service && <Panel key={service.title} service={service} onClose={onClose} />}</AnimatePresence>,
    document.body
  );
}

export default ServiceModal;
