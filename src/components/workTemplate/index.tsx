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
  mob1?: ImageProps;
  mob2?: ImageProps;
  tab1?: ImageProps;
  tab2?: ImageProps;
  webImg: ImageProps;
}

const Template: React.FC<TemplateProps> = ({ title, about, mainImage, mob1, mob2, tab1, tab2, webImg }) => {
  return (
    <div className="w-full mx-auto mb-[64px] sm:mb-[136px]">
      <h2 className=" font-georgia italic font-semibold text-[24px] sm:text-[32px] text-center mb-2 md:mb-4">{title}</h2>
      
      <h3 className="text-xl md:text-2xl font-medium text-center mb-[16px] sm:mb-[40px]">{about}</h3>
      
      <p className="text-base text-center mb-[24px] sm:mb-[56px]">
        <Styled>0 → 1</Styled> <Styled>B</Styled> <Styled>P</Styled> <Styled>PD</Styled> <Styled>\</Styled>
      </p>
      
      <div className="md:mb-[20px] mb-[8px]">
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl overflow-hidden">
          <Image {...mainImage} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:gap-[20px] md:mb-[20px] gap-[8px] mb-[8px]">
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full h-full">
            {mob1 && (
              <div className="w-full max-w-[329px] border border-[#EBEBEB] rounded-[4px] md:rounded-[12px] mb-4 overflow-hidden">
                <Image {...mob1} />
              </div>
            )}
            {tab1 && (
              <div className="w-full max-w-[613px] aspect-[613/343] rounded-[4px] md:rounded-[12px] overflow-hidden">
                <Image {...tab1} />
              </div>
            )}
          </div>
        </div>
        <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 flex justify-center items-center">
          <div className="flex flex-col items-center justify-center w-full h-full">
            {mob2 && (
              <div className="w-full max-w-[329px]  border border-[#EBEBEB] rounded-[4px] md:rounded-[12px] mb-4 overflow-hidden">
                <Image {...mob2} />
              </div>
            )}
            {tab2 && (
              <div className="w-full max-w-[613px] aspect-[613/343] rounded-[4px] md:rounded-[12px] overflow-hidden">
                <Image {...tab2} />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="border border-[#EBEBEB] rounded-xl md:rounded-3xl p-4 md:p-[22px] flex justify-center items-center">
        <div className="w-full max-w-[798px] border border-[#EBEBEB] rounded-[4px] md:rounded-[12px] overflow-hidden">
          <Image {...webImg} />
        </div>
      </div>
    </div>
  );
};

export default Template;