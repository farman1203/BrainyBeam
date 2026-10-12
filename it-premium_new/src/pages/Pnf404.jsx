
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal';

function NotFound() {
    return (
        <main className="not-found-page">
            <section className="not-found-content">
                <Reveal>
                    <div className="not-found-number">404</div>

                    <span className="kicker">PAGE NOT FOUND</span>

                    <h1>
                        Looks like this page <em>drifted away.</em>
                    </h1>

                    <p>
                        The page you're looking for may have moved, been removed,
                        or the link might be incorrect.
                    </p>

                    <div className="not-found-actions">
                        <Link className="btn primary" to="/">
                            <ArrowLeft size={18} />
                            Back to Home
                        </Link>

                        <Link className="text-link" to="/contact">
                            Contact us <ArrowUpRight size={17} />
                        </Link>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}

export default NotFound;
