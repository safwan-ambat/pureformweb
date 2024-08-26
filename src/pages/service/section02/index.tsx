import React from 'react';
import Card from '@/components/featureCard';
import img01 from '@/assets/img01.webp';
import img02 from '@/assets/img02.webp';
import img03 from '@/assets/img03.webp';
import img04 from '@/assets/img04.webp';

// Sample data
const cardData = [
  {
    title: "Bypass the Tedious Hiring Process",
    description: "Connect with a skilled designer, ready to bring your ideas to life today",
    image: img01, // Replace with the actual path to your icon
  },
  {
    title: "Swift, Beautiful Designs Delivered",
    description: "Receive multiple design updates per week, ensuring speed and quality.",
    image: img02, // Replace with the actual path to your icon
  },
  {
    title: "Always on, always responsive",
    description: "Your private Slack channel awaits for direct communication",
    image: img03, // Replace with the actual path to your icon
  },
  {
    title: "Transparent, Value-Based Pricing",
    description: "Clear pricing tailored to your project's scope and needs.",
    image: img04, // Replace with the actual path to your icon
  },
];

const CardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-[16px] lg:px-8">
      <h2 className=" font-bold text-center mb-8">
        We’re the Uber of design
        <br />
        <span className="text-gray-400">always ready to go</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full max-w-[760px]">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
