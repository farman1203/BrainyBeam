import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Search, Layers, Palette, Code2, FlaskConical, Rocket } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    icon: Search,
    description:
      'We deep-dive into your business goals, audience, and competitive landscape to build a crystal-clear project brief.',
  },
  {
    number: '02',
    title: 'Architecture',
    icon: Layers,
    description:
      'Our architects craft a robust technical blueprint — choosing the right stack, infrastructure, and integration patterns.',
  },
  {
    number: '03',
    title: 'Design',
    icon: Palette,
    description:
      'UX designers translate requirements into pixel-perfect wireframes and interactive prototypes you can click through.',
  },
  {
    number: '04',
    title: 'Development',
    icon: Code2,
    description:
      'Agile sprints power iterative development with daily standups, code reviews, and continuous integration pipelines.',
  },
  {
    number: '05',
    title: 'Testing',
    icon: FlaskConical,
    description:
      'Rigorous QA — unit, integration, performance, and security testing — ensures a defect-free, production-ready release.',
  },
  {
    number: '06',
    title: 'Launch',
    icon: Rocket,
    description:
      'We deploy with zero-downtime strategies, monitor post-launch health, and provide hands-on hypercare support.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const ProcessTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <div ref={ref} className="process-grid">
      {STEPS.map((step, i) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={step.number}
            className="process-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Step number + icon row */}
            <div className="process-card__header">
              <span className="process-card__number">{step.number}</span>
              <div className="process-card__icon">
                <Icon size={20} strokeWidth={1.75} />
              </div>
            </div>

            <h3 className="process-card__title">{step.title}</h3>
            <p className="process-card__desc">{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProcessTimeline;
