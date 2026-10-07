import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faqData';
import '../styles/components.css';

export default function FaqAccordion({ items = faqData, initialOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(initialOpen);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-accordion-container" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-question-btn"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              <span className="faq-icon-wrapper">
                <ChevronDown size={20} />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                className="faq-answer-content"
                role="region"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
