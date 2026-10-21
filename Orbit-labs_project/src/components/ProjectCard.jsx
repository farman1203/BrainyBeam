import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function ProjectCard({ project, index, tone = 'dark', cta, showLabel = false }) {
  const number = String(index + 1).padStart(2, '0');
  const tagVariant = tone === 'dark' ? 'dark' : 'light';

  return (
    <Card asChild className={`project-card card-lift tone-${tone}`}>
      <article>
        <div className={`project-art art-${index % 3}`}>
          <div className="project-art-bg">

            <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" />

          </div>
          <span className="project-art-index" aria-hidden="true">{number}</span>
          {showLabel && (
            <span className="project-art-label" aria-hidden="true">
              <Sparkles size={14} /> ORBIT LABS / PROJECT
            </span>
          )}
        </div>

        <div className="project-copy">
          <span className="project-eyebrow">CASE STUDY / {number}</span>
          <h3>{project.title}</h3>
          <p>{project.text}</p>
          <div className="project-tags">
            <Badge variant={tagVariant}>{project.category}</Badge>
            <Badge variant={tagVariant}>PRODUCT ENGINEERING</Badge>
          </div>
          <Link className="project-link" to={cta.to}>
            {cta.label} <ArrowUpRight size={16} className="arrow-nudge" aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </Link>
        </div>
      </article>
    </Card>
  );
}

export default ProjectCard;
