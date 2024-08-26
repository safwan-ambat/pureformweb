import React from 'react';
import Card from '@/components/card';

const steps = [
  {
    number: 1,
    title: 'Share Your Vision and objectives',
    description: "We'll discuss your design needs and start as quickly as day 1.",
    tilt: 'transform -rotate-2',  // Tilt to the left
  },
  {
    number: 2,
    title: 'Connect with Your Design Pro',
    description: "We'll match you with an expert who understands your industry.",
    tilt: 'transform rotate-1',  // Tilt to the right
  },
  {
    number: 3,
    title: 'Offload all your design tasks to us',
    description: 'See your vision take shape with each strategic iteration.',
    tilt: 'transform -rotate-1',  // Tilt to the left
  },
  {
    number: 4,
    title: 'Lead While We Craft',
    description: "Focus on driving your business. We'll perfect your visual narrative.",
    tilt: 'transform -rotate-1',  // Tilt to the right
  },
];

const StepsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-[72px] md:mt-[112px]">
      <h2 className=" px-14 text-center  font-semibold mb-10">
        Magic happens in <span className="text-gray-400">just 4 steps</span>
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-2 justify-center px-[16px] md:px-0">
        {steps.map((step) => (
          <Card
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            tilt={step.tilt}  // Pass the tilt class
          />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
