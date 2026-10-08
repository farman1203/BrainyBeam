import React from 'react';
import { motion } from 'motion/react';
import { containerVariants, itemFadeUp } from '../utils/motionVariants';
import '../styles/components.css';

const steps = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Understand business goals, audience expectations, technical constraints, and measurable ROI benchmarks.'
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'Define cloud architecture, database models, technical stack selection, and agile two-week sprint milestones.'
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Create intuitive UI/UX design systems, user journey wireframes, and interactive Figma prototypes.'
  },
  {
    step: '04',
    title: 'Develop',
    desc: 'Build scalable and secure software with clean code standards, strict type checking, and automated test coverage.'
  },
  {
    step: '05',
    title: 'Test',
    desc: 'Ensure performance, security compliance, cross-browser compatibility, and rigorous QA automated regression.'
  },
  {
    step: '06',
    title: 'Launch',
    desc: 'Deploy with zero downtime, configure real-time telemetry monitoring, and execute post-launch knowledge transfer.'
  }
];

export default function ProcessTimeline() {
  return (
    <motion.div
      className="process-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {steps.map((item, idx) => (
        <motion.div
          key={idx}
          className="process-card"
          variants={itemFadeUp}
          whileHover={{
            y: -6,
            transition: { duration: 0.25, ease: 'easeOut' }
          }}
        >
          <div className="process-number">{item.step}</div>
          <h3 className="process-title">{item.title}</h3>
          <p className="process-desc">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
