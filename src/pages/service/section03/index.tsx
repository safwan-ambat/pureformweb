import React from 'react';
import img01 from '@/assets/Im01.webp';
import img02 from '@/assets/Im02.webp';
import cardbg from '@/assets/cardBg.webp';


// Sample data


const CardList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-0 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8">
            Enjoy top-notch quality and flexibility
            <br />
            <span className="text-gray-400">without breaking the bank</span>
        </h2>
        <div className="flex gap-4">
            <div className="grid grid-cols-1 gap-[8px] md:w-[297px]  ">
                    <div className="flex text-white justify-center items-center bg-black h-[160px]  rounded-lg"> 
                        <h3 className=' '>$150k+ per year</h3>
                    </div>
                    <div className="flex gap-2 border-t-2 pt-[16px] mt-4 ">
                        <img src={img01} className='h-6'/>
                        <h3>Hiring full time </h3>
                    </div>
                    <p className='text-[12px]'>Overpriced,varied skill,locked  into  contact</p>
            </div>
            <div className="grid grid-cols-1 gap-[8px] md:w-[297px] ">
                    <div className="flex flex-col h-[160px] justify-end " 
                            style={{ backgroundImage: `url(${cardbg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center', }}>  
                            <h3 className=' text-white text-center pb-[13px]'>$8,000 per month</h3>        
                    </div>
                    <div className="flex gap-2 border-t-2 pt-[16px] mt-4">
                        <img src={img02} className='h-6'/>
                        <h3>Engaging with Pureform </h3>
                    </div>
                    <p className='text-[12px]'>Overpriced,varied skill,locked  into  contact</p>
            </div>
        </div>
        
    </div>
  );
};

export default CardList;
