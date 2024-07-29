import React from 'react';
import img01 from '@/assets/img01.webp';


// Sample data


const CardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">
            Enjoy top-notch quality and flexibility
            <br />
            <span className="text-gray-400">without breaking the bank</span>
        </h1>
        <div className="flex gap-4">
            <div className="grid grid-cols-1 gap-[16px] w-[297px] ">
                    <div className="flex text-white justify-center items-center bg-black h-[150px]  rounded-lg"> 
                        <h3 className=' '>$150k+ per year</h3>
                    </div>
                    <div className="flex gap-2 border-t-2 ">
                        <img src={img01} className='h-6'/>
                        <h3>Hiring full time </h3>
                    </div>
                    <p className='text-[12px]'>Overpriced,varied skill,locked  into  contact</p>
            </div>
            <div className="grid grid-cols-1 gap-[16px] w-[297px] ">
                    <div className="flex flex-col justify-end bg-gray-400 h-[150px] rounded-lg"> 
                        <div className="h-[48px] bg-[#45BC65] rounded "></div>
                    </div>
                    <div className="flex gap-2 border-t-2 ">
                        <img src={img01} className='h-6'/>
                        <h3>Hiring full time </h3>
                    </div>
                    <p className='text-[12px]'>Overpriced,varied skill,locked  into  contact</p>
            </div>
        </div>
        
    </div>
  );
};

export default CardList;
