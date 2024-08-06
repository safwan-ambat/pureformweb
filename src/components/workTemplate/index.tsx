import React from 'react';
import Styled from '@/components/styledWord';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-auto object-cover rounded-lg" />
);

interface TemplateProps {
  mainImage: ImageProps;
  mob1: ImageProps;
  mob2: ImageProps;
  webImg: ImageProps;
}

const Template: React.FC<TemplateProps> = ({ mainImage, mob1, mob2, webImg }) => {
  return (
    <div className="w-full mx-auto ">
      <p className="text-base text-center mt-20 mb-10 md:mb-10">
        <Styled>0 → 1</Styled> <Styled>B</Styled> <Styled>P</Styled> <Styled>PD</Styled> <Styled>\</Styled>
      </p>
      <h3 className="text-xl md:text-2xl font-medium text-center mb-14">Social space for home building</h3>
      
      <div className="md:mb-[20px] mb-[8px]">
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl overflow-hidden">
          <Image {...mainImage} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:gap-[20px] md:mb-[20px] gap-[8px] mb-[8px]">
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 md:p-14 flex justify-center items-center">
          <div className="w-full max-w-[329px] aspect-[329/676]">
            <Image {...mob1} />
          </div>
        </div>
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 md:p-14 flex justify-center items-center">
          <div className="w-full max-w-[329px] aspect-[329/676]">
            <Image {...mob2} />
          </div>
        </div>
      </div>
      
      <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 md:p-22 flex justify-center items-center">
        <div className="w-full max-w-[798px] aspect-[798/421]">
          <Image {...webImg} />
        </div>
      </div>
    </div>
  );
};

export default Template;