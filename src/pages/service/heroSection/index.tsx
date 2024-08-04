import React from 'react';
import Styled from '@/components/styledWord';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center px-[16px] md:px-12  xl:px-[350px] mt-8 sm:mt-12 md:mt-[56px]">
      <h1 className=" font-bold my-0 px-2 sm:px-4 md:px-8 lg:px-[100px]">
        Design Partner for fast shipping teams
      </h1>
      <p className="text-center md:text-[18px] text-[16px] mt-4 sm:mt-6 lg:mt-[32px] max-w-4xl md:px-12">
        We work with founders to build their Brand <Styled>B</Styled> Product <Styled>P</Styled> website <Styled>W</Styled> and
        Pitch Deck <Styled>PD</Styled> using a modular approach. From the first idea <Styled>0→1</Styled> scaling up <Styled>1→N</Styled>
        to creating a lasting legacy <Styled>N → XYZ</Styled> we tailor our solutions to fit your needs.
        Choose your timeline 1 month <Styled>\</Styled> 2 months <Styled>\\</Styled> 3 months <Styled>\\\</Styled> and let's
        create something remarkable together, one building block at a time.
      </p>
    </section>
  );
};

export default HeroSection;