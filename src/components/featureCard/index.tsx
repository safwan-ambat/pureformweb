import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-[16px] sm:w-full md:w-[372px] min-h-[166px] md:h-[240px] border-4 border-gray-200 transform transition-transform duration-300 hover:rotate-2 hover:-translate-y-2 overflow-hidden">
      <div className="grid grid-cols-5 h-full">
        <div className="col-span-3 flex flex-col justify-start p-[20px_18px_20px_20px] md:p-[32px_15px_32px_32px]">
          <h4 className="font-semibold mb-[8px]">{title}</h4>
          <p className="text-gray-600 text-[14px] md:text-[16px]">{description}</p>
        </div>
        <div className="col-span-2 flex md:items-end items-center justify-center md:justify-end pr-[18px] md:pr-[22px] md:pb-[22px]">
          <img src={image} alt="Illustration" className="h-[110px] w-[110px] md:h-[120px] md:w-[120px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Card;
