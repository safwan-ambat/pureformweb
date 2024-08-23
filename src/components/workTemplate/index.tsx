import React from 'react';
import Styled from '@/components/styledWord';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-auto object-fit rounded-lg" />
);

interface TemplateProps {
  title: string;
  about: string;
  mainImage: ImageProps;
  mob1: ImageProps;
  mob2: ImageProps;
  webImg: ImageProps;
}

const Template: React.FC<TemplateProps> = ({ title,about, mainImage, mob1, mob2, webImg }) => {
  return (
    <div className="w-full mx-auto mb-[64px] sm:mb-[136px]">
      <h2 className="font-medium text-center mb-2 md:mb-4">{title}</h2>
      
      <h3 className="text-xl md:text-2xl font-medium text-center mb-[16px] sm:mb-[40px]">{about}</h3>
      
      <p className="text-base text-center  mb-[24px] sm:mb-[56px]">
        <Styled>0 → 1</Styled> <Styled>B</Styled> <Styled>P</Styled> <Styled>PD</Styled> <Styled>\</Styled>
      </p>
      
      <div className="md:mb-[20px] mb-[8px]">
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl overflow-hidden">
          <Image {...mainImage} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:gap-[20px] md:mb-[20px] gap-[8px] mb-[8px]">
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 md:p-14 flex justify-center items-center">
          <div className="w-full max-w-[329px] aspect-[116/230] border border-[#EBEBEB] rounded-[4px] md:rounded-[12px]">
            <Image {...mob1} />
          </div>
        </div>
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 md:p-14 flex justify-center items-center">
          <div className="w-full max-w-[329px] aspect-[116/230] border border-[#EBEBEB] rounded-[4px] md:rounded-[12px]">
            <Image {...mob2} />
          </div>
        </div>
      </div>
      
      <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 md:p-[22px] flex justify-center items-center">
        <div className="w-full max-w-[798px] aspect-[798/421] border border-[#EBEBEB] rounded-[4px] md:rounded-[12px]">
          <Image {...webImg} />
        </div>
      </div>
    </div>
  );
};

export default Template;