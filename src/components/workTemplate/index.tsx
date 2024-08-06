import React from 'react';
import Styled from '@/components/styledWord';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-fit object-cover rounded-lg" />
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
        <p className="text-[16px] text-center md:mb-[40px] mt-[80px]"><Styled>0 → 1</Styled> <Styled>B</Styled> <Styled>P</Styled> <Styled>PD</Styled> <Styled>\</Styled></p>
        <h3 className="text-2xl font-medium text-center mb-[56px]">Social space for home building</h3>

      <div className="mb-6">
        <div className="border border-blue-200 rounded-3xl  ">
          <div className="  rounded-4xl w-fit">
            <Image {...mainImage} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex border border-[EBEBEB] rounded-2xl py-[56px] justify-center">
          <div className="w-[329px] h-[676px]  rounded-[9px]">
            <Image {...mob1} />
          </div>
        </div>
        <div className="flex  justify-center border border-[EBEBEB] rounded-2xl py-[56px] ">
          <div className="w-[329px] h-[676px]  rounded-[9px]">
            <Image {...mob2} />
          </div>
        </div>
      </div>
      
      <div className="flex  justify-center border border-[EBEBEB] rounded-2xl py-[88px] ">
        <div className="w-[798px] h-[421px] border border-[EBEBEB] rounded-[9px]">
          <Image {...webImg} />
        </div>
      </div>
    </div>
  );
};

export default Template;