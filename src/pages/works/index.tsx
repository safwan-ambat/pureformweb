import React from 'react';
import Template from '@/components/workTemplate';
import mainImg from '@/assets/work/wImgmain.webp';
import mob1 from '@/assets/work/wMob1.webp';
import mob2 from '@/assets/work/wMob2.webp';
import web from '@/assets/work/wWeb.webp';

const WorksPage: React.FC = () => {
  return (
    <div className="w-full">
      <header className="text-center px-4 sm:px-[16px] md:px-16 lg:px-[356px] mt-8 sm:mt-12 lg:mt-[56px]">
        <h1 className="text-2xl sm:text-[36px] md:text-4xl lg:text-[48px] font-bold my-0 px-2 sm:px-4 md:px-8 lg:px-[100px]">
          Projects shipped for startups to unicorns
        </h1>
        <p className="text-base sm:text-[16px] lg:text-[18px] text-black mt-4 sm:mt-6 lg:mt-[32px] max-w-3xl mx-auto">
          We are your design partner that's always available
          as you grow or downsize. You can pause or cancel anytime,
          just need a quick fix? Deck for a YC call? Come back unpause and reuse your remaining days.
        </p>
      </header>
      
      <div className="px-4 sm:px-8 md:px-12 lg:px-[60px]">
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

export default WorksPage;