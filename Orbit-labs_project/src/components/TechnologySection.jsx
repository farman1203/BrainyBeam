import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { technologyGroups } from '@/data/siteData';
import Reveal from './Reveal';

/** Technology stack section, shared by Home and About. */
function TechnologySection() {
  return (
    <section className="section technology-section">
      <div className="container">
        <Reveal>
          <div className="technology-heading">
            <span className="kicker">OUR TECHNOLOGY STACK</span>
            <h2>
              The right tools to build <em>what's next.</em>
            </h2>
            <p>
              We use modern, reliable technologies to create digital products
              that are scalable, secure and ready to grow with your business.
            </p>
          </div>
        </Reveal>

        <div className="technology-grid">
          {technologyGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={(index % 3) * 0.08}>
                <Card asChild className="technology-card card-lift">
                  <article>
                    <div className="technology-card-top">
                      <div className="technology-icon">
                        <Icon size={23} aria-hidden="true" />
                      </div>
                      <span className="technology-number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <ul className="technology-tags" aria-label={`${group.title} technologies`}>
                      {group.technologies.map((technology) => (
                        <li key={technology}>
                          <Badge variant="outline">{technology}</Badge>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnologySection;
