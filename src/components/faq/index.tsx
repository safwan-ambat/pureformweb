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
      className="w-full md:w-[566px] text-left p-[12px] md:p-[25px] bg-white rounded-[8px] border-2 hover:shadow-md transition-shadow duration-200 flex justify-between items-center"
    >
      <span className="text-gray-800 text-sm md:text-base">{item.question}</span>
      <span className="text-gray-100 text-lg md:text-xl ml-2">{isOpen ? '−' : '+'}</span>
    </button>
    {isOpen && (
      <div className="p-3 md:p-4 bg-gray-50 rounded-b-[8px] mt-1 text-gray-600 text-sm md:text-base">
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
    <div className="max-w-full md:max-w-2xl md:mx-auto  mx-[16px] pb-0 pt-[6px] px-[5px] md:pt-[8px] md:px-[8px] faqBg rounded-[10px] md:rounded-[16px]">
      
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