import React from 'react';
import img01 from '@/assets/Im01.webp';
import img02 from '@/assets/Im02.webp';
import cardbg from '@/assets/cardBg.webp';

const CardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-0 px-[16px] md:px-8">
      <h2 className="font-bold text-center mb-8 md:px-[315px]">
        Enjoy top-notch quality and flexibility
        <span className="text-gray-400"> without breaking the bank</span>
      </h2>
      <div className="flex md:flex-row gap-4">
        <div className="grid grid-cols-1 gap-[8px] w-full md:w-[297px]">
          <div className="flex flex-col justify-center bg-black h-[160px] rounded-lg">
            <h3 className='text-white text-center pb-[13px]'>$150k+ per year</h3>
          </div>
          <div className="flex gap-2 border-t-2 pt-[16px] mt-4 h-[48px] items-center">
            <img src={img01} alt="Icon" className='h-6 w-6 object-contain'/>
            <h5 className="font-semibold">Hiring full time</h5>
          </div>
          <p className='text-[12px] h-[36px]'>High costs. Unpredictable skill fit. Long-term lock-in</p>
        </div>
        <div className="grid grid-cols-1 gap-[8px] w-full md:w-[297px]">
          <div 
            className="flex flex-col justify-end h-[160px] rounded-lg"
            style={{
              backgroundImage: `url(${cardbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h3 className='text-white italic text-center pb-[13px]'>Value-Driven Billing</h3>
          </div>
          <div className="flex gap-2 border-t-2 pt-[16px] mt-4 h-[48px] items-center">
            <img src={img02} alt="Icon" className='h-6 w-6 object-contain'/>
            <h5 className="font-semibold">Engaging with Pureform</h5>
          </div>
          <p className='text-[12px] h-[36px]'>Expert design, whenever you need it. No strings attached</p>
        </div>
      </div>
    </div>
  );
};

export default CardList;