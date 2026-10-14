import { Handshake, Layers3, UserRoundCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamAreas, teamMembers } from '@/data/siteData';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import CtaSection from '../components/CtaSection';

const principles = [
  {
    icon: UserRoundCheck,
    title: 'One senior team',
    text: 'Strategy, design and engineering sit together, so decisions are quick and nothing gets lost in translation.',
  },
  {
    icon: Handshake,
    title: 'No hand-offs',
    text: 'The people who plan your product are the same people who build and launch it.',
  },
  {
    icon: Layers3,
    title: 'No unnecessary layers',
    text: 'You talk directly to the people doing the work, with clear and regular updates.',
  },
];

function initials(name) {
  return name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();
}

function Team() {
  return (
    <main id="main">
      <title>Team | Orbit Labs</title>

      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">OUR TEAM</span>
            <h1>People who build <em>with you.</em></h1>
            <p>
              A small, senior team that covers strategy, design and engineering,
              working side by side with you from the first idea to launch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <SectionHeading
            kicker="WHAT WE COVER"
            title={<>One team, <em>every skill.</em></>}
            action={{ to: '/services', label: 'View our services' }}
          />
          <div className="technology-grid">
            {teamAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={(index % 3) * 0.08}>
                  <Card asChild className="technology-card card-lift">
                    <article>
                      <div className="technology-card-top">
                        <div className="technology-icon">
                          <Icon size={23} aria-hidden="true" />
                        </div>
                      </div>
                      <h3>{area.title}</h3>
                      <p>{area.text}</p>
                      <ul className="technology-tags" aria-label={`${area.title} focus areas`}>
                        {area.tags.map((tag) => (
                          <li key={tag}><Badge variant="outline">{tag}</Badge></li>
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

      {teamMembers.length > 0 && (
        <section className="section member-section">
          <div className="container">
            <SectionHeading kicker="MEET THE TEAM" title={<>The people behind <em>Orbit Labs.</em></>} />
            <div className="member-grid">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={(index % 4) * 0.07}>
                  <Card asChild className="member-card card-lift">
                    <article>
                      {member.photo ? (
                        <img src={member.photo} alt={member.name} loading="lazy" decoding="async" />
                      ) : (
                        <div className="member-avatar" aria-hidden="true">{initials(member.name)}</div>
                      )}
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </article>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="dark-section team-principles">
        <div className="container">
          <SectionHeading light kicker="HOW WE WORK TOGETHER" title={<>Small team. <em>Direct access.</em></>} />
          <div className="principle-grid">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <Card asChild className="about-value-card card-lift">
                    <article>
                      <div className="about-value-top">
                        <Icon size={23} aria-hidden="true" />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection
        kicker="WORK WITH US"
        title={<>Let’s build it <em>together.</em></>}
        text="Tell us what you're working on and we'll introduce the right people for it."
        label="Talk to our team"
      />
    </main>
  );
}

export default Team;
