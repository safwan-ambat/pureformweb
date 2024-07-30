import React from 'react';

interface CardProps {
  number: number;
  title: string;
  description: string;
  tilt?: string; // New prop to accept tilt direction
}

const Card: React.FC<CardProps> = ({ number, title, description, tilt = '' }) => {
  return (
    <div className={`border-4 rounded-lg md:p-[24px] p-[16px] md:m-2 m-1 md:w-[250px]  flex flex-col justify-between ${tilt}`}>
             <div className="flex   ml-auto">
             <div className=" flex items-center justify-center md:w-[46px] md:h-[38px] w-[29px] h-[24px] bg-gray-300 rounded-full">
               <span className="text-white text-lg font-bold">{number}</span>
             </div>

             </div>
      <div className="flex-row justify-center items-center "> 
          <h3 className="md:text-[18px] text-[12px] font-semibold">{title}</h3>
          <p className="md:text-[16px] text-[12px] text-gray-600 mt-[8px]">{description}</p>
      </div>
    </div>
  );
};

export default Card;
