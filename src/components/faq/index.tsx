import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "What happens after I subscribe?", answer: "After subscribing, you'll gain access to our design services..." },
  { question: "Why not hire a full-time designer?", answer: "Hiring a full-time designer can be costly and may not be necessary..." },
  { question: "How much design work will I get?", answer: "The amount of design work depends on your subscription plan..." },
  { question: "How quickly can I start?", answer: "You can start immediately after subscribing..." },
  { question: "What design software do you use?", answer: "We use industry-standard design software such as..." },
  { question: "What if I don't like my designs?", answer: "We offer revisions and work closely with you to ensure satisfaction..." },
  { question: "How do I manage my subscription?", answer: "You can manage your subscription through your account dashboard..." },
  { question: "Can I pause or cancel?", answer: "Yes, you can pause or cancel your subscription at any time..." },
];

const FAQItem: React.FC<{ item: FAQItem, isOpen: boolean, toggleOpen: () => void }> = ({ item, isOpen, toggleOpen }) => (
  <div className="mb-2">
    <button
      onClick={toggleOpen}
      className="w-[566px] text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center"
    >
      <span className="text-gray-800">{item.question}</span>
      <span className="text-gray-500 text-xl">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="p-4 bg-gray-50 rounded-b-lg mt-1 text-gray-600">
        {item.answer}
      </div>
    )}
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-xl ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          toggleOpen={() => toggleOpen(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;