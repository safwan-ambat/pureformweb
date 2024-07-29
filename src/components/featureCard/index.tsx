import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl  p-8 sm:w-full md:w-[372px] border-4 border-gray-200 transform transition-transform duration-300 hover:rotate-2 hover:-translate-y-2">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <img src={image} alt="Illustration" className="h-[120px] w-[120px]" />
      </div>
    </div>
  );
};

export default Card;
