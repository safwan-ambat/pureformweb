import React from 'react';

interface CardProps {
  number: number;
  title: string;
  description: string;
  tilt?: string; // New prop to accept tilt direction
}

const Card: React.FC<CardProps> = ({ number, title, description, tilt = '' }) => {
  return (
    <div className={`border-4 rounded-lg p-[24px] m-4 shadow-lg w-[250px] h-[215px] flex flex-col justify-between ${tilt}`}>
             <div className="flex   ml-auto">
             <div className=" flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
               <span className="text-white text-lg font-bold">{number}</span>
             </div>

             </div>
      <div className="flex-row justify-between items-center w-[182px]"> 
          <h2 className="text-[18px] font-semibold">{title}</h2>
          <p className="text-gray-600 mt-[8px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
