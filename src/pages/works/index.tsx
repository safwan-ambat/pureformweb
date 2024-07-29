import React from 'react';
import Template from '@/components/workTemplate';
import mainImg from '@/assets/work/wImgmain.webp';
import mob1 from '@/assets/work/wMob1.webp';
import mob2 from '@/assets/work/wMob2.webp';
import web from '@/assets/work/wWeb.webp';

const worksPage: React.FC = () => {
  return (
    <div className="w-full">
      <header className="text-center px-[356px] mt-[56px]">
        <h1 className=" text-3xl font-bold my-4">Design Partner for fast shipping teams</h1>
        <p className="text-geist mb-8 text-black mt-[32px]">
          we are your design partner that’s always available
          as you grow or downsize. you can pause or cancel anytime,
          just need a quick fix? deck for a YC call? come back unpause and reuse your remaining days.
        </p>
      </header>
      
      <div className="px-[60px]">
          <Template 
              mainImage={{ src: `${mainImg}`, alt: "Main image" }}
              mob1={{ src: `${mob1}`, alt: "Image 1" }}
              mob2={{ src: `${mob2}`, alt: "Image 2" }}
              webImg={{ src: `${web}`, alt: "Image 3" }}
          />
        
      </div>

    </div>
   
  );
};

export default worksPage;
