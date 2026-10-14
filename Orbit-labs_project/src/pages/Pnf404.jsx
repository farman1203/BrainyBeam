import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Reveal from '../components/Reveal';

function NotFound() {
  return (
    <main id="main" className="not-found-page">
      <title>Page not found | Orbit Labs</title>

      <section className="not-found-content">
        <Reveal>
          <div className="not-found-number" aria-hidden="true">404</div>
          <span className="kicker">PAGE NOT FOUND</span>
          <h1>
            Looks like this page <em>drifted away.</em>
          </h1>
          <p>
            The page you're looking for may have moved, been removed,
            or the link might be incorrect.
          </p>
          <div className="not-found-actions">
            <Button asChild size="lg">
              <Link to="/">
                <ArrowLeft size={18} aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="link" size="link">
              <Link to="/contact">
                Contact us <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default NotFound;
