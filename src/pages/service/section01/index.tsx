import React from 'react';
import Card from '@/components/card';

const steps = [
  {
    number: 1,
    title: 'Start a new design subscription',
    description: "We'll discuss your design needs and start as quickly as day 1.",
    tilt: 'transform -rotate-2',  // Tilt to the left
  },
  {
    number: 2,
    title: 'Get paired with a senior designer',
    description: 'Your project will be worked on by a vetted senior designer.',
    tilt: 'transform rotate-2',  // Tilt to the right
  },
  {
    number: 3,
    title: 'Offload all your design tasks to us',
    description: 'Watch your vision turn to life with multiple updates per week.',
    tilt: 'transform -rotate-2',  // Tilt to the left
  },
  {
    number: 4,
    title: 'Focus on the things that matter',
    description: 'Leave all the designing to us and focus on growing the biz.',
    tilt: 'transform rotate-2',  // Tilt to the right
  },
];

const StepsSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center mt-[88px]">
      <h1 className="text-3xl font-bold mb-10">
        Magic happens in <span className="text-gray-400">just 4 steps</span>
      </h1>
      <div className="flex flex-wrap justify-center">
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
