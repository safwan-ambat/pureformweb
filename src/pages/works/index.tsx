import React from 'react';
import Template from '@/components/workTemplate';
import mainImg from '@/assets/work/wMain.webp';
import mob1 from '@/assets/work/wMob1.webp';
import mob2 from '@/assets/work/wMob2.webp';
import web from '@/assets/work/wWeb.webp';
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
import ShimmerButton from "@/components/magicui/shimmer-button";

const WorksPage: React.FC = () => {

  const handleButtonClick = () => {
    window.open('https://cal.com/pureform/20min', '_blank');
  };


  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-7xl sm:px-8 md:px-12 lg:px-[60px]">
        <header className="px-[10px] text-center mt-8 sm:mt-12 lg:mt-[56px] mb-[72px] sm:mb-[80px]">
          <h1 className="font-bold my-0">
            Projects shipped for<br/> <span className='font-georgia italic'>startups to unicorns</span>
          </h1>
          <p className="text-base sm:text-[16px] lg:text-[18px] text-black mt-4 sm:mt-6 lg:mt-[32px] max-w-3xl mx-auto px-[20px] md:px-[120px]">
          We’re your design partner, ready whenever you need us—whether you’re expanding,
          downsizing, or just need a quick touch-up. Got a last-minute deck for a YC call?
          We’ve got you covered. Reach out anytime, and we’ll jump right in
          </p>
        </header>
        
        <div className="sm:hidden w-full fixed bottom-0 z-50 opacity-100 pb-[20px] flex">
          <ShimmerButton
            onClick={handleButtonClick}
            className="StyledBtn  py-[16px] px-[14px] font-semibold text-[14px]  -rotate-2 w-full max-w-[160px] mx-auto"
          >
            Book your kickoff
          </ShimmerButton>
        </div>

        <div className='px-[16px]'>
          <Template
            title='Superdev'
            about='No-code DevOps automation Platform'
            mainImage={{ src: `${mainImg}`, alt: "Main image" }}
            tab1={{ src: `${mob1}`, alt: "Image 1" }}
            tab2={{ src: `${mob2}`, alt: "Image 2" }}
            webImg={{ src: `${web}`, alt: "Image 3" }}
          />
          <Template
            title='Mywasiyat'
            about='Enabling every Indian to create a legally valid will'
            mainImage={{ src: `${mainImg01}`, alt: "Main image" }}
            mob1={{ src: `${mob101}`, alt: "Image 1" }}
            mob2={{ src: `${mob201}`, alt: "Image 2" }}
            webImg={{ src: `${web01}`, alt: "Image 3" }}
          />
          <Template
            title='Unbox'
            about='Social space for home building'
            mainImage={{ src: `${mainImg02}`, alt: "Main image" }}
            mob1={{ src: `${mob102}`, alt: "Image 1" }}
            mob2={{ src: `${mob202}`, alt: "Image 2" }}
            webImg={{ src: `${web02}`, alt: "Image 3" }}
          />
          <Template
            title='Whatsay'
            about='SasS tool enabling conversational survey on Whatsapp, Telegram'
            mainImage={{ src: `${mainImg03}`, alt: "Main image" }}
            mob1={{ src: `${mob103}`, alt: "Image 1" }}
            mob2={{ src: `${mob203}`, alt: "Image 2" }}
            webImg={{ src: `${web03}`, alt: "Image 3" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorksPage;