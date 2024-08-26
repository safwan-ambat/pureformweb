import React from 'react';

interface CardProps {
  number: number;
  title: string;
  description: string;
  tilt?: string; // New prop to accept tilt direction
}

const Card: React.FC<CardProps> = ({ number, title, description, tilt = '' }) => {
  return (
    <div className={` relative p-[4px] rounded-[12px] md:rounded-[16px] bg-gradient-to-b from-[rgb(216,216,216)] to-[rgb(148,148,148)]  md:m-2 m-1 md:w-[250px]   ${tilt}`}>
        <div className="bg-white rounded-[10px] md:rounded-[13px] p-[10px_10px_16px_16px] md:p-[16px_16px_24px_24px] flex flex-col justify-between min-h-[150px]">
            <div className="flex   ml-auto">
                  <div className="StyledNum flex items-center justify-center md:w-[46px] md:h-[38px] w-[29px] h-[24px] bg-gray-300 rounded-full">
                    <span className="text-white text-[14px] md:text-[18px] font-bold italic">{number}</span>
                  </div>

                  </div>
            <div className="flex-row justify-center items-end h-full  "> 
                <h5 className="md:text-[18px] text-[12px] font-semibold pr-[20px] md:pr-[30px]">{title}</h5>
                <p className="md:text-[16px] text-[12px] text-gray-600 mt-[8px] md:mr-[20px] ">{description}</p>
            </div>
        </div>
           
    </div>
  );
};

export default Card;
