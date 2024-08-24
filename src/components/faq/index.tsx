import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What all you design?",
    answer: `Our comprehensive design services include:
• Mobile applications
• Web applications
• Desktop applications
• Landing pages
• Pitch Deck
• Brand design
These areas form the core of our expertise, but we're versatile. We can assist with other design needs as well. Whether you're looking to establish a new brand identity or refine an existing one, we've got you covered. If you have a project that doesn't fit neatly into these categories, don't hesitate to reach out - we're always excited to take on new challenges!`
  },
  {
    question: "How does your design process work?",
    answer: `Our streamlined process is designed for efficiency and flexibility:
1. Project Initiation: Reach out to us with your project needs.
2. Quote and Agreement: We'll provide a project-specific quote. Once agreed, we proceed.
3. Connect: We'll invite you to our Slack workspace.
4. Collaborate: Add your team members and start submitting design requests for your project.
5. Receive Updates: We provide multiple design updates per week, from initial concepts to final deliverables.
6. Project Completion: Once your project is finished, we deliver all assets. Need more work? Simply start a new project!`
  },
  {
    question: "Why not hire a full-time designer?",
    answer: `Opting for our design service offers several advantages over hiring a full-time designer:
1. Cost-effective: Pay only for the design work you need, without the overhead of a full-time salary, benefits, and equipment costs.
2. Flexible capacity: Scale your design resources up or down based on your current project needs, without the complexities of hiring or layoffs.
3. Diverse expertise: Access a team of designers with varied skills and experience, rather than relying on a single designer's skillset.
4. Quick turnaround: With our team-based approach, we can often deliver results faster than a single in-house designer.
5. Always available: Unlike an individual who may take vacations or sick days, our service ensures continuous availability for your design needs.`
  },
  {
    question: "How quickly can I start?",
    answer: `We pride ourselves on our rapid onboarding process:
1. Immediate Project Initiation: As soon as you're ready to begin, we are too. There's no lengthy setup period.
2. Same-Day Slack Invitation: Upon agreeing to work together, we'll send you an invitation to our Slack workspace on the same day.
3. Quick Team Integration: You can add your team members to the Slack channel immediately, ensuring everyone is connected from day one.
4. Instant Request Submission: Start submitting your design requests as soon as you're in the Slack workspace. There's no waiting period.
5. Rapid Response: Our team is geared up to begin working on your projects quickly, often starting within 24-48 hours of receiving your first request.`
  },
  {
    question: "What design software do you use?",
    answer: "At our agency, we utilize a variety of industry-leading design software to ensure we deliver high-quality results across different design needs."
  },
  {
    question: "What if I don't like my designs?",
    answer: `We're committed to your satisfaction. If you're not happy with your designs:
1. Communicate: Share your concerns promptly and specifically.
2. Revisions: We'll work on revisions based on your feedback.
3. Collaboration: We'll discuss alternatives and new directions if needed.
4. Guarantee: We continue refining until you're satisfied with the results.
Our goal is to deliver designs you love. We view feedback as an essential part of the creative process and use it to ensure the final product meets your vision and needs.`
  }
];

const FAQItem: React.FC<{ item: FAQItem, isOpen: boolean, toggleOpen: () => void }> = ({ item, isOpen, toggleOpen }) => {
  const renderAnswer = (answer: string) => {
    return answer.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.startsWith('•') ? (
          <li className="">{line.substring(1).trim()}</li>
        ) : (
          <p>{line}</p>
        )}
       
      </React.Fragment>
    ));
  };

  return (
    <div className="mb-2">
      <div className=" bg-white sm:rounded-[16px] rounded-[8px] border-2 hover:shadow-md transition-shadow duration-200"> 
      <button
        onClick={toggleOpen}
        className="w-full md:w-[566px] text-left p-[12px] md:px-[32px] md:py-[24px]  flex justify-between items-center"
      >
        <span className="text-gray-800 text-[12px] sm:text-[18px] font-medium">{item.question}</span>
        <span className="text-gray-100 text-lg md:text-[32px] ml-2">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-3 md:px-[32px] md:pb-[24px] rounded-b-[8px] sm:rounded-[16px] -mt-2 text-gray-400 text-[10px] sm:text-[16px] md:text-base space-y-2 ">
          {renderAnswer(item.answer)}
        </div>
      )}
      </div>
     
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" max-w-full sm:max-w-[582px] md:mx-auto mx-[16px] pb-0 pt-[6px] px-[5px] md:pt-[8px] md:px-[8px] faqBg rounded-[10px] md:rounded-[16px]">
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