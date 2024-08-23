import React from 'react';
import Template from '@/components/workTemplate';
import mainImg from '@/assets/work/w1Main.webp';
import mob1 from '@/assets/work/w1Mob1.webp';
import mob2 from '@/assets/work/w1Mob2.webp';
import web from '@/assets/work/w1Web.webp';
import mainImg01 from '@/assets/work/w1Main.webp';
import mob101 from '@/assets/work/w1Mob1.webp';
import mob201 from '@/assets/work/w1Mob2.webp';
import web01 from '@/assets/work/w1Web.webp';
import mainImg02 from '@/assets/work/w2Main.webp';
import mob102 from '@/assets/work/w2Mob1.webp';
import mob202 from '@/assets/work/w2Mob2.webp';
import web02 from '@/assets/work/w2Web.webp';
import mainImg03 from '@/assets/work/w3Main.webp';
import mob103 from '@/assets/work/w3Mob1.webp';
import mob203 from '@/assets/work/w3Mob2.webp';
import web03 from '@/assets/work/w3Web.webp';

const WorksPage: React.FC = () => {
  return (
    <div className="w-full">
      <header className="text-center mt-8 sm:mt-12 lg:mt-[56px]">
        <h1 className=" font-bold my-0 ">
          Projects shipped for<br/> <span className='font-georgia italic'>startups to unicorns</span>
        </h1>
        <p className="text-base sm:text-[16px] lg:text-[18px] text-black mt-4 sm:mt-6 lg:mt-[32px] max-w-3xl mx-auto  px-[20px] md:px-[60px] ">
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
        <Template 
          mainImage={{ src: `${mainImg01}`, alt: "Main image" }}
          mob1={{ src: `${mob101}`, alt: "Image 1" }}
          mob2={{ src: `${mob201}`, alt: "Image 2" }}
          webImg={{ src: `${web01}`, alt: "Image 3" }}
        />
        <Template 
          mainImage={{ src: `${mainImg02}`, alt: "Main image" }}
          mob1={{ src: `${mob102}`, alt: "Image 1" }}
          mob2={{ src: `${mob202}`, alt: "Image 2" }}
          webImg={{ src: `${web02}`, alt: "Image 3" }}
        />
        <Template 
          mainImage={{ src: `${mainImg03}`, alt: "Main image" }}
          mob1={{ src: `${mob103}`, alt: "Image 1" }}
          mob2={{ src: `${mob203}`, alt: "Image 2" }}
          webImg={{ src: `${web03}`, alt: "Image 3" }}
        />
      </div>
    </div>
  );
};

export default WorksPage;