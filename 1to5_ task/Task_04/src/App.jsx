import { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension that allows us to write HTML inside JavaScript.",
    },
    {
      question: "What is useState?",
      answer: "useState is a React Hook used to store and update state.",
    },
    {
      question: "What is Virtual DOM?",
      answer: "Virtual DOM is a lightweight copy of the real DOM used for faster updates.",
    },
  ];

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container">
      <h1>❓ Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div className="faq" key={index}>
          <div
            className="question"
            onClick={() => handleClick(index)}
          >
            <span>{faq.question}</span>
            <span>{activeIndex === index ? "−" : "+"}</span>
          </div>

          {activeIndex === index && (
            <div className="answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;