import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
// import faqData from '../data/faqData';

const FaqAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="faq-accordion">
      {faqData.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
          >
            {/* Question row / trigger */}
            <button
              className="faq-item__trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
            >
              <span className="faq-item__question">{item.question}</span>
              <motion.span
                className="faq-item__chevron"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <ChevronDown size={20} strokeWidth={2} />
              </motion.span>
            </button>

            {/* Answer panel — AnimatePresence for mount/unmount animation */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  className="faq-item__answer-wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="faq-item__answer">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
