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
    description: "Enjoy the ease of having a senior designer ready to start on day 1.",
    image: img01, // Replace with the actual path to your icon
  },
  {
    title: "Swift, Beautiful Designs Delivered",
    description: "Receive multiple design updates per week, ensuring speed and quality.",
    image: img02, // Replace with the actual path to your icon
  },
  {
    title: "Fully async for more flexibility",
    description: "Direct communication with a private Slack channel.",
    image: img03, // Replace with the actual path to your icon
  },
  {
    title: "Transparent, Simple Pricing",
    description: "One simple monthly fee for all your product design needs.",
    image: img04, // Replace with the actual path to your icon
  },
];

const CardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        We’re the Uber of design
        <br />
        <span className="text-gray-400">always ready to go</span>
      </h1>
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
